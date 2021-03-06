<?php

/**
 * This is the model base class for the table "user_message".
 * DO NOT MODIFY THIS FILE! It is automatically generated by giix.
 * If any changes are necessary, you must set or override the required
 * property or method in class "UserMessage".
 *
 * Columns in table "user_message" available as properties of the model,
 * followed by relations of table "user_message" available as properties of the model.
 *
 * @property integer $id
 * @property integer $from_user_id
 * @property integer $to_user_id
 * @property integer $game_id
 * @property integer $played_game_id
 * @property string $message
 * @property integer $type
 *
 * @property User $fromUser
 * @property User $toUser
 * @property Game $game
 * @property PlayedGame $playedGame
 */
abstract class BaseUserMessage extends GxActiveRecord {

	public static function model($className=__CLASS__) {
		return parent::model($className);
	}

	public function tableName() {
		return 'user_message';
	}

	public static function label($n = 1) {
		return Yii::t('app', 'UserMessage|UserMessages', $n);
	}

	public static function representingColumn() {
		return 'message';
	}

	public function rules() {
		return array(
			array('from_user_id, to_user_id, game_id', 'required'),
			array('from_user_id, to_user_id, game_id, played_game_id, type', 'numerical', 'integerOnly'=>true),
			array('message', 'length', 'max'=>255),
			array('played_game_id, message, type', 'default', 'setOnEmpty' => true, 'value' => null),
			array('id, from_user_id, to_user_id, game_id, played_game_id, message, type', 'safe', 'on'=>'search'),
		);
	}

	public function relations() {
		return array(
			'fromUser' => array(self::BELONGS_TO, 'User', 'from_user_id'),
			'toUser' => array(self::BELONGS_TO, 'User', 'to_user_id'),
			'game' => array(self::BELONGS_TO, 'Game', 'game_id'),
			'playedGame' => array(self::BELONGS_TO, 'PlayedGame', 'played_game_id'),
		);
	}

	public function pivotModels() {
		return array(
		);
	}

	public function attributeLabels() {
		return array(
			'id' => Yii::t('app', 'ID'),
			'from_user_id' => null,
			'to_user_id' => null,
			'game_id' => null,
			'played_game_id' => null,
			'message' => Yii::t('app', 'Message'),
			'type' => Yii::t('app', 'Type'),
			'fromUser' => null,
			'toUser' => null,
			'game' => null,
			'playedGame' => null,
		);
	}

	public function search() {
		$criteria = new CDbCriteria;

		$criteria->compare('id', $this->id);
		$criteria->compare('from_user_id', $this->from_user_id);
		$criteria->compare('to_user_id', $this->to_user_id);
		$criteria->compare('game_id', $this->game_id);
		$criteria->compare('played_game_id', $this->played_game_id);
		$criteria->compare('message', $this->message, true);
		$criteria->compare('type', $this->type);

		return new CActiveDataProvider($this, array(
			'criteria' => $criteria,
			'pagination'=>array(
        'pageSize'=>Yii::app()->fbvStorage->get("settings.pagination_size"),
      ),
		));
	}
}