import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  grams: number;

  @Column()
  calories: number;

  @Column()
  price: number;

  @Column()
  slug: string;

  @Column()
  proteins: number;

  @Column()
  fats: number;

  @Column()
  carbohydrates: number;
}
