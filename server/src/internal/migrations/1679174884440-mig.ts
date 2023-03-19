import { MigrationInterface, QueryRunner } from "typeorm";

export class mig1679174884440 implements MigrationInterface {
    name = 'mig1679174884440'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_access_level_enum" AS ENUM('user', 'moderator', 'admin')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "fullname" character varying NOT NULL, "password" character varying NOT NULL, "department" character varying, "position" character varying, "currentHashedRefreshToken" character varying, "access_level" "public"."user_access_level_enum" NOT NULL DEFAULT 'user', CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_access_level_enum"`);
    }

}
