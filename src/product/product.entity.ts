import { Category } from '../category/category.entity';
import { Discount } from '../discount/discount.entity';
import { Ingredient } from '../ingredient/ingredient.entity';
import { Label } from '../label/label.entity';
import { Tag } from '../tag/tag.entity';
import { Variation } from '../variation/variation.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  OneToOne,
  JoinTable,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id?: number;

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

  @Column('decimal', { precision: 6, scale: 2 })
  proteins!: number;

  @Column('decimal', { precision: 6, scale: 2 })
  fats!: number;

  @Column('decimal', { precision: 6, scale: 2 })
  carbohydrates!: number;

  @OneToOne(() => Discount, (discount: Discount) => discount.product)
  discount?: Discount;

  @ManyToOne(() => Category, (category: Category) => category.products)
  category!: number;

  @ManyToMany(() => Ingredient)
  @JoinTable()
  ingredients?: Ingredient[];

  @ManyToMany(() => Tag)
  @JoinTable()
  tags?: Tag[];

  @ManyToMany(() => Variation)
  @JoinTable()
  variations?: Variation[];

  @ManyToMany(() => Label)
  @JoinTable()
  labels?: Label[];
}
