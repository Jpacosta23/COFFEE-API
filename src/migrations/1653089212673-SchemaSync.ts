import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1653089212673 implements MigrationInterface {
  name = 'SchemaSync1653089212673';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "description" character varying`,
    );
  }
}
