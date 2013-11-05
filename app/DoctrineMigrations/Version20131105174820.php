<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration,
    Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your need!
 */
class Version20131105174820 extends AbstractMigration
{
    public function up(Schema $schema)
    {
       $this->addSql("       
            ALTER TABLE  `activity` ADD  `city`  VARCHAR( 255 )  DEFAULT NULL COMMENT  '城市'    AFTER  `locationId`
            ");

    }

    public function down(Schema $schema)
    {
        // this down() migration is autogenerated, please modify it to your needs

    }
}
