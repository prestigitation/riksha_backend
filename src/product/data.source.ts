import { DataSource, DataSourceOptions } from 'typeorm';
export const dbdatasource: DataSourceOptions = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'riksha',
  password: 'jyerb43671gfw6b26b2',
  // Database name
  database: 'riksha',
  synchronize: false,
  entities: ['dist/product/product.entity.js'],
  migrations: ['dist/product/migrations/*.js'],
  migrationsTableName: 'product_migrations',
};

const dataSource = new DataSource(dbdatasource);
export default dataSource;
