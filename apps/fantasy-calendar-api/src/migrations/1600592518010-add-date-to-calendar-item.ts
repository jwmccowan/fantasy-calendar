import { MigrationInterface, QueryRunner } from 'typeorm';

export class addDateToCalendarItem1600592518010 implements MigrationInterface {
  name = 'addDateToCalendarItem1600592518010';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "calendar-item " ADD "date" character varying(10) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "calendar-item " DROP COLUMN "date"`);
  }
}
