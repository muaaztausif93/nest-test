import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { OfferBoxSizeEnum } from '../../offers/offers.types';

export class CreateOfferTable1669202828978 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'offers',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            unsigned: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'slug',
            type: 'varchar',
            length: '255',
            isNullable: true,
            isUnique: true,
          },
          {
            name: 'description',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'requirements',
            type: 'varchar',
            length: '128',
            isNullable: false,
          },
          {
            name: 'thumbnail',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'box_size',
            type: 'enum',
            enum: Object.values(OfferBoxSizeEnum),
            default: `'${OfferBoxSizeEnum.Large}'`,
          },
          {
            name: 'is_desktop',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'is_android',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'is_ios',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'offer_url_template',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'provider_name',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'external_offer_id',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'icon',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('offers');
  }
}
