import { MigrationInterface, QueryRunner } from "typeorm";

export class  кшлriksha1711368418167 implements MigrationInterface {
    name = ' кшлriksha1711368418167'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ingredients\` DROP FOREIGN KEY \`FK_45086227ab44452354335f03876\``);
        await queryRunner.query(`ALTER TABLE \`ingredients\` CHANGE \`productId\` \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`labels\` DROP FOREIGN KEY \`FK_b1f4a11bf417c729f57893e289f\``);
        await queryRunner.query(`ALTER TABLE \`labels\` CHANGE \`productId\` \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tags\` DROP FOREIGN KEY \`FK_1e685539b0827e801e5ac275db2\``);
        await queryRunner.query(`ALTER TABLE \`tags\` CHANGE \`productId\` \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_ff56834e735fa78a15d0cf21926\``);
        await queryRunner.query(`ALTER TABLE \`products\` CHANGE \`categoryId\` \`categoryId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`variations\` DROP FOREIGN KEY \`FK_a471ef11612596a4afb19de0f06\``);
        await queryRunner.query(`ALTER TABLE \`variations\` CHANGE \`overpay\` \`overpay\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`variations\` CHANGE \`productId\` \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`ingredients\` ADD CONSTRAINT \`FK_45086227ab44452354335f03876\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`labels\` ADD CONSTRAINT \`FK_b1f4a11bf417c729f57893e289f\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tags\` ADD CONSTRAINT \`FK_1e685539b0827e801e5ac275db2\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_ff56834e735fa78a15d0cf21926\` FOREIGN KEY (\`categoryId\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`variations\` ADD CONSTRAINT \`FK_a471ef11612596a4afb19de0f06\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`variations\` DROP FOREIGN KEY \`FK_a471ef11612596a4afb19de0f06\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_ff56834e735fa78a15d0cf21926\``);
        await queryRunner.query(`ALTER TABLE \`tags\` DROP FOREIGN KEY \`FK_1e685539b0827e801e5ac275db2\``);
        await queryRunner.query(`ALTER TABLE \`labels\` DROP FOREIGN KEY \`FK_b1f4a11bf417c729f57893e289f\``);
        await queryRunner.query(`ALTER TABLE \`ingredients\` DROP FOREIGN KEY \`FK_45086227ab44452354335f03876\``);
        await queryRunner.query(`ALTER TABLE \`variations\` CHANGE \`productId\` \`productId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`variations\` CHANGE \`overpay\` \`overpay\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`variations\` ADD CONSTRAINT \`FK_a471ef11612596a4afb19de0f06\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` CHANGE \`categoryId\` \`categoryId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_ff56834e735fa78a15d0cf21926\` FOREIGN KEY (\`categoryId\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tags\` CHANGE \`productId\` \`productId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`tags\` ADD CONSTRAINT \`FK_1e685539b0827e801e5ac275db2\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`labels\` CHANGE \`productId\` \`productId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`labels\` ADD CONSTRAINT \`FK_b1f4a11bf417c729f57893e289f\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ingredients\` CHANGE \`productId\` \`productId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ingredients\` ADD CONSTRAINT \`FK_45086227ab44452354335f03876\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
