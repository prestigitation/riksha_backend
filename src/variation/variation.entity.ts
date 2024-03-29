import { Product } from '../product/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('variations')
export class Variation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: 0 })
  overpay?: number;

  @ManyToOne(() => Product, (product: Product) => product.variations)
  product: Product;
}
