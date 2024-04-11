import { Product } from '../product/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('discounts')
export class Discount {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  discount!: number;

  @ManyToOne(() => Product, (product: Product) => product.discount)
  product?: Product;
}
