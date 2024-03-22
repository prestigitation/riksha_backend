import { MigrationInterface, QueryRunner } from "typeorm";

export class Product1711120643838 implements MigrationInterface {
    name = 'Product1711120643838'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`image\` varchar(255) NOT NULL, \`grams\` int NOT NULL, \`calories\` int NOT NULL, \`price\` int NOT NULL, \`slug\` varchar(255) NOT NULL, \`proteins\` int NOT NULL, \`fats\` int NOT NULL, \`carbohydrates\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`products\``);
    }

}
