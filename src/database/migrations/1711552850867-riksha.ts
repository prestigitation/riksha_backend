import { MigrationInterface, QueryRunner } from "typeorm";

export class Riksha1711552850867 implements MigrationInterface {
    name = 'Riksha1711552850867'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`products_ingredients_ingredients\` (\`productsId\` int NOT NULL, \`ingredientsId\` int NOT NULL, INDEX \`IDX_d0eae7587be198241a7e8f3b9d\` (\`productsId\`), INDEX \`IDX_8f604f0bafbc2f2cc419129da7\` (\`ingredientsId\`), PRIMARY KEY (\`productsId\`, \`ingredientsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products_tags_tags\` (\`productsId\` int NOT NULL, \`tagsId\` int NOT NULL, INDEX \`IDX_88687975db5205fdbdb10969fc\` (\`productsId\`), INDEX \`IDX_72fa6ba0f176a89a2e9d90274c\` (\`tagsId\`), PRIMARY KEY (\`productsId\`, \`tagsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products_variations_variations\` (\`productsId\` int NOT NULL, \`variationsId\` int NOT NULL, INDEX \`IDX_974c0f891e98ea800d7eea2947\` (\`productsId\`), INDEX \`IDX_093144cf186b39fbb88757994a\` (\`variationsId\`), PRIMARY KEY (\`productsId\`, \`variationsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products_labels_labels\` (\`productsId\` int NOT NULL, \`labelsId\` int NOT NULL, INDEX \`IDX_18b34f9e356cade7fdeb62a933\` (\`productsId\`), INDEX \`IDX_9122a2bab28420976b0f9314c2\` (\`labelsId\`), PRIMARY KEY (\`productsId\`, \`labelsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`ingredients\` DROP FOREIGN KEY \`FK_45086227ab44452354335f03876\``);
        await queryRunner.query(`ALTER TABLE \`ingredients\` CHANGE \`image\` \`image\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`ingredients\` CHANGE \`productId\` \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`labels\` DROP FOREIGN KEY \`FK_b1f4a11bf417c729f57893e289f\``);
        await queryRunner.query(`ALTER TABLE \`labels\` CHANGE \`productId\` \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tags\` DROP FOREIGN KEY \`FK_1e685539b0827e801e5ac275db2\``);
        await queryRunner.query(`ALTER TABLE \`tags\` CHANGE \`productId\` \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_ff56834e735fa78a15d0cf21926\``);
        await queryRunner.query(`ALTER TABLE \`products\` CHANGE \`categoryId\` \`categoryId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`variations\` DROP FOREIGN KEY \`FK_a471ef11612596a4afb19de0f06\``);
        await queryRunner.query(`ALTER TABLE \`variations\` CHANGE \`productId\` \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`ingredients\` ADD CONSTRAINT \`FK_45086227ab44452354335f03876\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`labels\` ADD CONSTRAINT \`FK_b1f4a11bf417c729f57893e289f\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tags\` ADD CONSTRAINT \`FK_1e685539b0827e801e5ac275db2\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_ff56834e735fa78a15d0cf21926\` FOREIGN KEY (\`categoryId\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`variations\` ADD CONSTRAINT \`FK_a471ef11612596a4afb19de0f06\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products_ingredients_ingredients\` ADD CONSTRAINT \`FK_d0eae7587be198241a7e8f3b9dc\` FOREIGN KEY (\`productsId\`) REFERENCES \`products\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`products_ingredients_ingredients\` ADD CONSTRAINT \`FK_8f604f0bafbc2f2cc419129da74\` FOREIGN KEY (\`ingredientsId\`) REFERENCES \`ingredients\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`products_tags_tags\` ADD CONSTRAINT \`FK_88687975db5205fdbdb10969fc4\` FOREIGN KEY (\`productsId\`) REFERENCES \`products\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`products_tags_tags\` ADD CONSTRAINT \`FK_72fa6ba0f176a89a2e9d90274c5\` FOREIGN KEY (\`tagsId\`) REFERENCES \`tags\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`products_variations_variations\` ADD CONSTRAINT \`FK_974c0f891e98ea800d7eea2947a\` FOREIGN KEY (\`productsId\`) REFERENCES \`products\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`products_variations_variations\` ADD CONSTRAINT \`FK_093144cf186b39fbb88757994ae\` FOREIGN KEY (\`variationsId\`) REFERENCES \`variations\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`products_labels_labels\` ADD CONSTRAINT \`FK_18b34f9e356cade7fdeb62a933a\` FOREIGN KEY (\`productsId\`) REFERENCES \`products\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`products_labels_labels\` ADD CONSTRAINT \`FK_9122a2bab28420976b0f9314c24\` FOREIGN KEY (\`labelsId\`) REFERENCES \`labels\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products_labels_labels\` DROP FOREIGN KEY \`FK_9122a2bab28420976b0f9314c24\``);
        await queryRunner.query(`ALTER TABLE \`products_labels_labels\` DROP FOREIGN KEY \`FK_18b34f9e356cade7fdeb62a933a\``);
        await queryRunner.query(`ALTER TABLE \`products_variations_variations\` DROP FOREIGN KEY \`FK_093144cf186b39fbb88757994ae\``);
        await queryRunner.query(`ALTER TABLE \`products_variations_variations\` DROP FOREIGN KEY \`FK_974c0f891e98ea800d7eea2947a\``);
        await queryRunner.query(`ALTER TABLE \`products_tags_tags\` DROP FOREIGN KEY \`FK_72fa6ba0f176a89a2e9d90274c5\``);
        await queryRunner.query(`ALTER TABLE \`products_tags_tags\` DROP FOREIGN KEY \`FK_88687975db5205fdbdb10969fc4\``);
        await queryRunner.query(`ALTER TABLE \`products_ingredients_ingredients\` DROP FOREIGN KEY \`FK_8f604f0bafbc2f2cc419129da74\``);
        await queryRunner.query(`ALTER TABLE \`products_ingredients_ingredients\` DROP FOREIGN KEY \`FK_d0eae7587be198241a7e8f3b9dc\``);
        await queryRunner.query(`ALTER TABLE \`variations\` DROP FOREIGN KEY \`FK_a471ef11612596a4afb19de0f06\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_ff56834e735fa78a15d0cf21926\``);
        await queryRunner.query(`ALTER TABLE \`tags\` DROP FOREIGN KEY \`FK_1e685539b0827e801e5ac275db2\``);
        await queryRunner.query(`ALTER TABLE \`labels\` DROP FOREIGN KEY \`FK_b1f4a11bf417c729f57893e289f\``);
        await queryRunner.query(`ALTER TABLE \`ingredients\` DROP FOREIGN KEY \`FK_45086227ab44452354335f03876\``);
        await queryRunner.query(`ALTER TABLE \`variations\` CHANGE \`productId\` \`productId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`variations\` ADD CONSTRAINT \`FK_a471ef11612596a4afb19de0f06\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` CHANGE \`categoryId\` \`categoryId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_ff56834e735fa78a15d0cf21926\` FOREIGN KEY (\`categoryId\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tags\` CHANGE \`productId\` \`productId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`tags\` ADD CONSTRAINT \`FK_1e685539b0827e801e5ac275db2\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`labels\` CHANGE \`productId\` \`productId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`labels\` ADD CONSTRAINT \`FK_b1f4a11bf417c729f57893e289f\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ingredients\` CHANGE \`productId\` \`productId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ingredients\` CHANGE \`image\` \`image\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ingredients\` ADD CONSTRAINT \`FK_45086227ab44452354335f03876\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP INDEX \`IDX_9122a2bab28420976b0f9314c2\` ON \`products_labels_labels\``);
        await queryRunner.query(`DROP INDEX \`IDX_18b34f9e356cade7fdeb62a933\` ON \`products_labels_labels\``);
        await queryRunner.query(`DROP TABLE \`products_labels_labels\``);
        await queryRunner.query(`DROP INDEX \`IDX_093144cf186b39fbb88757994a\` ON \`products_variations_variations\``);
        await queryRunner.query(`DROP INDEX \`IDX_974c0f891e98ea800d7eea2947\` ON \`products_variations_variations\``);
        await queryRunner.query(`DROP TABLE \`products_variations_variations\``);
        await queryRunner.query(`DROP INDEX \`IDX_72fa6ba0f176a89a2e9d90274c\` ON \`products_tags_tags\``);
        await queryRunner.query(`DROP INDEX \`IDX_88687975db5205fdbdb10969fc\` ON \`products_tags_tags\``);
        await queryRunner.query(`DROP TABLE \`products_tags_tags\``);
        await queryRunner.query(`DROP INDEX \`IDX_8f604f0bafbc2f2cc419129da7\` ON \`products_ingredients_ingredients\``);
        await queryRunner.query(`DROP INDEX \`IDX_d0eae7587be198241a7e8f3b9d\` ON \`products_ingredients_ingredients\``);
        await queryRunner.query(`DROP TABLE \`products_ingredients_ingredients\``);
    }

}
