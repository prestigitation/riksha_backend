import { Product } from '../product/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('ingredients')
export class Ingredient {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  image?: string;

  @ManyToOne(() => Product, (product: Product) => product.ingredients)
  product?: Product;
}
