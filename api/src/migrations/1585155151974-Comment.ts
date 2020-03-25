import { MigrationInterface, QueryRunner } from 'typeorm';

export class Comment1585155151974 implements MigrationInterface {
  name = 'Comment1585155151974';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
        `CREATE TABLE "comment"
         (
             id           BIGSERIAL NOT NULL,
             commenter_id BIGINT    NOT NULL,
             request_id   BIGINT    NOT NULL,
             content      TEXT      NOT NULL,
             created_at   TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
             updated_at   TIMESTAMP WITH TIME ZONE
         );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "comment"`);
  }

}
