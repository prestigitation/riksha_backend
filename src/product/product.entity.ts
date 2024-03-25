import { Category } from 'src/category/category.entity';
import { Discount } from 'src/discount/discount.entity';
import { Ingredient } from 'src/ingredient/ingredient.entity';
import { Label } from 'src/label/label.entity';
import { Tag } from 'src/tag/tag.entity';
import { Variation } from 'src/variation/variation.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name!: string;

  @Column()
  image!: string;

  @Column()
  grams!: number;

  @Column()
  calories!: number;

  @Column()
  price!: number;

  @Column()
  slug!: string;

  @Column()
  proteins!: number;

  @Column()
  fats!: number;

  @Column()
  carbohydrates!: number;

  @OneToOne(() => Discount, (discount: Discount) => discount.product)
  discount: Discount;

  @ManyToOne(() => Category, (category: Category) => category.products)
  category!: Category;

  @OneToMany(() => Ingredient, (ingredient: Ingredient) => ingredient.product)
  ingredients!: Ingredient[];

  @OneToMany(() => Tag, (tag: Tag) => tag.product)
  tags: Tag[];

  @OneToMany(() => Variation, (variation: Variation) => variation.product)
  variations: Variation[];

  @OneToMany(() => Label, (label: Label) => label.product)
  labels: Label[];
}
