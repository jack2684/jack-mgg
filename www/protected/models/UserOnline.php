<?php

Yii::import('application.models._base.BaseUserOnline');

class UserOnline extends BaseUserOnline
{
    const STATUS_WAIT = 0;
    const STATUS_PAIR = 1;
    const STATUS_PLAY = 2;

    public static function model($className = __CLASS__)
    {
        return parent::model($className);
    }
}