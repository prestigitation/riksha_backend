import { Product } from 'src/product/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('labels')
export class Label {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @ManyToOne(() => Product, (product: Product) => product.labels)
  product?: Product;
}
