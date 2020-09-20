import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialCalendar1600590554198 implements MigrationInterface {
  name = 'initialCalendar1600590554198';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "calendar-item " ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(500) NOT NULL, "description" character varying(500) NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "calendarId" uuid, CONSTRAINT "PK_870228356122fa74a971b8cb226" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "calendar" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(500) NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_2492fb846a48ea16d53864e3267" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "calendar-item " ADD CONSTRAINT "FK_af0dfc52ac03f89fdb1ea25fb16" FOREIGN KEY ("calendarId") REFERENCES "calendar"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "calendar-item " DROP CONSTRAINT "FK_af0dfc52ac03f89fdb1ea25fb16"`,
    );
    await queryRunner.query(`DROP TABLE "calendar"`);
    await queryRunner.query(`DROP TABLE "calendar-item "`);
  }
}
