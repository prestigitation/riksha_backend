import { Product } from '../product/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity('discounts')
export class Discount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  discount!: number;

  @OneToOne(() => Product, (product: Product) => product.discount)
  product!: Product;
}
