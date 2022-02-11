import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSpecification1644571159142 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Specifications_cars",
                columns: [
                    {
                        name: "car_id",
                        type: "uuid",
                    },
                    {
                        name: "specification_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: 'now()',
                    },
                ],
            })
        );

        await queryRunner.createForeignKey(
            "specificantions_cars",
            new TableForeignKey({
                name: "FKSpecificantionCar",
                referencedTableName: "specifications",
                referencedColumnNames: ["id"],
                columnNames: ["specificantion_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "specificantions_cars",
            new TableForeignKey({
                name: "FKCarSpecificantion",
                referencedTableName: "cars",
                referencedColumnNames: ["id"],
                columnNames: ["car_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "specifications_cars",
            "FKCarSpecification"
        );

        await queryRunner.dropForeignKey(
            "specifications_cars",
            "FKCarSpecificationCar"
        );

        await queryRunner.dropTable("specifications_cars",);


    }

}
