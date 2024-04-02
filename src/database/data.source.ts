import { Variation } from '../variation/variation.entity';
import { Label } from '../label/label.entity';
import { Product } from '../product/product.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Discount } from '../discount/discount.entity';
import { Ingredient } from '../ingredient/ingredient.entity';
import { Combo } from '../combo/combo.entity';
import { Category } from '../category/category.entity';
import { Tag } from '../tag/tag.entity';
export const dbdatasource: DataSourceOptions = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'riksha',
  password: 'jyerb43671gfw6b26b2',
  // Database name
  database: 'riksha',
  synchronize: false,
  entities: [Product, Label, Variation, Discount, Ingredient, Combo, Category, Tag],
  migrations: ['dist/database/migrations/*.js'],
  migrationsTableName: 'product_migrations',
};

const dataSource = new DataSource(dbdatasource);
export default dataSource;
