import { DataSource, DataSourceOptions } from 'typeorm';
export const seedSourceData: DataSourceOptions = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'riksha',
  password: 'jyerb43671gfw6b26b2',
  // Database name
  database: 'riksha',
  synchronize: false,
  entities: ['src/*/*.entity.ts'],
  migrations: ['dist/database/migrations/*.js'],
  migrationsTableName: 'product_migrations',
};

const seedSource = new DataSource(seedSourceData);
export default seedSource;
