import { MigrationInterface, QueryRunner } from "typeorm"

export class createUser1676895606526 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" varchar(50) NOT NULL, "name" varchar(50) NOT NULL, 
        "password" varchar(50) NOT NULL, "email" varchar(50) NOT NULL)`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP Table "users`)
    }

}
