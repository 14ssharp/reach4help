import {MigrationInterface, QueryRunner} from "typeorm";

/*

Modeling this off the Google Maps data model for addresses.

"address_components" : [
            {
               "long_name" : "1600",
               "short_name" : "1600",
               "types" : [ "street_number" ]
            },
            {
               "long_name" : "Amphitheatre Parkway",
               "short_name" : "Amphitheatre Pkwy",
               "types" : [ "route" ]
            },
            {
               "long_name" : "Mountain View",
               "short_name" : "Mountain View",
               "types" : [ "locality", "political" ]
            },
            {
               "long_name" : "Santa Clara County",
               "short_name" : "Santa Clara County",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "California",
               "short_name" : "CA",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "United States",
               "short_name" : "US",
               "types" : [ "country", "political" ]
            },
            {
               "long_name" : "94043",
               "short_name" : "94043",
               "types" : [ "postal_code" ]
            }
         ],

 */

export class Address1585152819436 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
              `CREATE TABLE "address" (
                                       id BIGSERIAL NOT NULL,
                                       country_id BIGINT NOT NULL,
                                       address1 VARCHAR NOT NULL,
                                       address2 VARCHAR NOT NULL,
                                       address3 VARCHAR NOT NULL,
                                       locality1 VARCHAR,
                                       locality2 VARCHAR,
                                       postal_code VARCHAR,
                                       latitude DOUBLE PRECISION NOT NULL,
                                       longitude DOUBLE PRECISION NOT NULL,
                                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                       updated_at TIMESTAMP
               );`,
        );    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "address"`, undefined);
    }

}
