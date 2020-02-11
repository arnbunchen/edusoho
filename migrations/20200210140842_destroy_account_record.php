<?php

use Phpmig\Migration\Migration;

class DestroyAccountRecord extends Migration
{
    /**
     * Do the migration
     */
    public function up()
    {
        $biz = $this->getContainer();
        $connection = $biz['db'];
        $connection->exec("
            CREATE TABLE IF NOT EXISTS `destroy_account_record` (
              `id` INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
              `nickname` VARCHAR (10) NOT NULL DEFAULT '0' COMMENT '用户名',
              `userId` INT (10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '用户id',
              `reason` VARCHAR (256)  NOT NULL DEFAULT '0' COMMENT '注销理由',
              `rejectedReson` VARCHAR (128) NOT NULL DEFAULT '0' COMMENT '拒绝申请理由',
              `status` VARCHAR (128) NOT NULL DEFAULT 'audit' COMMENT '注销状态（audit、cancel、passed、rejected）',
              `passedTime` int(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '通过时间',
              `createdTime` int(10) UNSIGNED NOT NULL DEFAULT '0',
              `updatedTime` int(10) UNSIGNED NOT NULL DEFAULT '0',
              PRIMARY KEY (`id`)
            ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='注销用户记录表';
        ");
    }

    /**
     * Undo the migration
     */
    public function down()
    {
        $biz = $this->getContainer();
        $connection = $biz['db'];
        $connection->exec('
            DROP TABLE IF EXISTS `destroy_account_record`;
        ');
    }
}
