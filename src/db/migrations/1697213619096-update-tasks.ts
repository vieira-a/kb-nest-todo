import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateTasks1697213619096 implements MigrationInterface {
  name = 'UpdateTasks1697213619096';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "created_at"`);
    await queryRunner.query(
      `ALTER TABLE "tasks" ADD "created_at" character varying NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "updated_at"`);
    await queryRunner.query(
      `ALTER TABLE "tasks" ADD "updated_at" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "updated_at"`);
    await queryRunner.query(
      `ALTER TABLE "tasks" ADD "updated_at" TIMESTAMP NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "created_at"`);
    await queryRunner.query(
      `ALTER TABLE "tasks" ADD "created_at" TIMESTAMP NOT NULL`,
    );
  }
}
