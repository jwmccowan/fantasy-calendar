import { MigrationInterface, QueryRunner } from 'typeorm';

export class cleanUpTimestamps1600621210895 implements MigrationInterface {
  name = 'cleanUpTimestamps1600621210895';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "calendar-item " DROP COLUMN "created"`);
    await queryRunner.query(`ALTER TABLE "calendar-item " DROP COLUMN "updated"`);
    await queryRunner.query(`ALTER TABLE "calendar" DROP COLUMN "created"`);
    await queryRunner.query(`ALTER TABLE "calendar" DROP COLUMN "updated"`);
    await queryRunner.query(`ALTER TABLE "calendar-item " ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    await queryRunner.query(`ALTER TABLE "calendar-item " ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    await queryRunner.query(`ALTER TABLE "calendar" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    await queryRunner.query(`ALTER TABLE "calendar" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    await queryRunner.query(`CREATE INDEX "IDX_81704caa2dd60c5fd0a8a4c0f3" ON "calendar-item " ("date") `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "IDX_81704caa2dd60c5fd0a8a4c0f3"`);
    await queryRunner.query(`ALTER TABLE "calendar" DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "calendar" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "calendar-item " DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "calendar-item " DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "calendar" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
    await queryRunner.query(`ALTER TABLE "calendar" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
    await queryRunner.query(`ALTER TABLE "calendar-item " ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
    await queryRunner.query(`ALTER TABLE "calendar-item " ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
  }
}
