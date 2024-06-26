import { Product } from '../product/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title!: string;

  @Column()
  slug!: string;

  @Column()
  image!: string;

  @OneToMany(() => Product, (product: Product) => product.category)
  products?: Product[];
}
