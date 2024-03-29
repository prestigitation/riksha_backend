import { Command, CommandRunner } from 'nest-commander';
import * as path from 'path';
import { Category } from '../category/category.entity';
import { Ingredient } from '../ingredient/ingredient.entity';
import { Label } from '../label/label.entity';
import { ProductService } from '../product/product.service';
import { Tag } from '../tag/tag.entity';
import seedSource from './seed.source';
import { Product } from '../product/product.entity';
import slugify from 'slugify';

@Command({
  name: 'seed',
  arguments: '',
  options: {},
})
export class SeedSampleEntitiesCommand extends CommandRunner {
  constructor(private readonly productService: ProductService) {
    super();
  }
  async run(): Promise<void> {
    await seedSource.initialize();
    const labels: Label[] = [
      { title: 'TOP', name: 'Топ позиции' },
      { title: 'NEW', name: 'Новинки' },
    ];
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
      results[entity] = await seedSource
        .createQueryBuilder()
        .insert()
        .into(entity)
        .values(values)
        .execute();
    };

    for (const entity of fillingEntities) {
      for (const [key, value] of Object.entries(entity)) {
        await fillEntity(key, value);
      }
    }
    const ingredients1 = await seedSource.getRepository(Ingredient).find({
      where: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    });
    const tags1 = await seedSource.getRepository(Tag).find({
      where: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    });
    const tags2 = await seedSource.getRepository(Tag).find({
      where: [
        {
          id: 2,
        },
      ],
    });
    const labels1 = await seedSource.getRepository(Label).find({
      where: [{ title: 'TOP' }],
    });
    const category1 = await seedSource
      .getRepository(Category)
      .findOneBy({ id: 3 });
    const product1 = await seedSource.getRepository(Product).create({
      name: 'Ролл "Филадельфия"',
      grams: 200,
      calories: 130,
      price: 269,
      proteins: 7.5,
      fats: 3.8,
      carbohydrates: 16.6,
      image: path.join(
        __dirname,
        'src/storage/products/rolls/rolls_philadelphia.png',
      ),
      slug: slugify('Ролл "Филадельфия"', {
        lower: true,
        locale: 'ru',
        remove: /[*+~.()'"!:@]/g,
      }),
    });
    const product2 = await seedSource.getRepository(Product).create({
      name: 'Ролл "Сливочная креветка"',
      grams: 200,
      calories: 130,
      price: 224,
      proteins: 7.5,
      fats: 3.8,
      carbohydrates: 16.6,
      image: path.join(
        __dirname,
        'src/storage/products/rolls/rolls_slivochnaya_krevetka.png',
      ),
      slug: slugify('Ролл "Сливочная креветка"', {
        lower: true,
        locale: 'ru',
        remove: /[*+~.()'"!:@]/g,
      }),
    });
    const product3 = await seedSource.getRepository(Product).create({
      name: 'Ролл "Чикен энд Чиз"',
      grams: 200,
      calories: 130,
      price: 232,
      proteins: 7.5,
      fats: 3.8,
      carbohydrates: 16.6,
      image: path.join(
        __dirname,
        'src/storage/products/rolls/rolls_chicken_and_cheese.png',
      ),
      slug: slugify('Ролл "Чикен энд Чиз"', {
        lower: true,
        locale: 'ru',
        remove: /[*+~.()'"!:@]/g,
      }),
    });
    if (category1) {
      product1.category = category1!.id;
      product2.category = category1!.id;
      product3.category = category1!.id;
    }
    if (labels1?.length) {
      product1.labels = labels1;
      product2.labels = labels1;
      product3.labels = labels1;
    }
    if (ingredients1?.length) {
      product1.ingredients = ingredients1;
      product2.ingredients = ingredients1;
      product3.ingredients = ingredients1;
    }
    if (tags1?.length) {
      product1.tags = tags1;
      product3.tags = tags1;
    }

    if (tags2?.length) {
      product2.tags = tags2;
    }

    await seedSource
      .getRepository(Product)
      .save([product1, product2, product3]);
    await seedSource.destroy();
  }
}

export const commands = [SeedSampleEntitiesCommand];
