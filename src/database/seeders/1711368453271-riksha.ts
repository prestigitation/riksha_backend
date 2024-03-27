import { Label } from 'src/label/label.entity';
import dataSource from '../seed.source';
import { Tag } from 'src/tag/tag.entity';
import * as path from 'path';
import { Ingredient } from 'src/ingredient/ingredient.entity';
import { Category } from 'src/category/category.entity';
import {
  EntitySchema,
  EntityTarget,
  getRepository,
  MigrationInterface,
  QueryRunner,
} from 'typeorm';
import { Product } from 'src/product/product.entity';
import { default as slugify } from 'slugify';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LabelService } from 'src/label/label.service';

export class Riksha1711368453271 implements MigrationInterface {
  name = 'Riksha1711368453271';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const labels: Label[] = [{ title: 'TOP' }, { title: 'NEW' }];
    const tags: Tag[] = [
      {
        title: 'Острое',
        image: path.join(__dirname, 'src/storage/tags/spicy.png'),
      },
      {
        title: 'Горячий ролл',
        image: path.join(__dirname, 'src/storage/tags/hot.png'),
      },
    ];
    const ingredients: Ingredient[] = [
      {
        name: 'Лосось',
        image: path.join(__dirname, 'src/storage/ingredients/salmon.png'),
      },
      {
        name: 'сыр "Филадельфия"',
      },
      {
        name: 'огурец',
      },
      {
        name: 'авокадо',
      },
    ];

    const categories: Category[] = [
      {
        title: 'Пицца',
        image: path.join(__dirname, 'src/storage/categories/pizza.png'),
      },
      {
        title: 'Суши',
        image: path.join(__dirname, 'src/storage/categories/sushi.png'),
      },
      {
        title: 'Роллы',
        image: path.join(__dirname, 'src/storage/categories/rolle.png'),
      },
      {
        title: 'Сеты',
        image: path.join(__dirname, 'src/storage/categories/set.png'),
      },
      {
        title: 'Wok',
        image: path.join(__dirname, 'src/storage/categories/wok.png'),
      },
      {
        title: 'Супы',
        image: path.join(__dirname, 'src/storage/categories/soup.png'),
      },
      {
        title: 'Салаты',
        image: path.join(__dirname, 'src/storage/categories/salads.png'),
      },
      {
        title: 'Десерты',
        image: path.join(__dirname, 'src/storage/categories/dessert.png'),
      },
      {
        title: 'Напитки',
        image: path.join(__dirname, 'src/storage/categories/drink.png'),
      },
      {
        title: 'Акции',
        image: path.join(__dirname, 'src/storage/categories/sale.png'),
      },
    ];

    const fillingEntities = [
      { labels },
      { tags },
      { ingredients },
      { categories },
    ];

    const results = {};

    const fillEntity = async (entity: string, values: any) => {
      results[entity] = await dataSource
        .createQueryBuilder()
        .insert()
        .into(entity)
        .values(values)
        .execute();
    };

    for (const entity of fillingEntities) {
      for (const [key, value] of Object.entries(entity)) {
        fillEntity(key, value);
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await dataSource.dropDatabase();
    await queryRunner.query(
      `CREATE DATABASE ${dataSource.getMetadata(Product).database};`,
    );
    await queryRunner.release();
  }
}
