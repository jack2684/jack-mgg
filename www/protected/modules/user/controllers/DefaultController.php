<?php

class DefaultController extends Controller
{
	public function filters() {
    return array( // add blocked IP filter here
        'IPBlock',
    );
  }
  
	/**
	 * As 
	 */
	public function actionIndex()
	{
		// Junjie Guan: if it is not login, I load another layouts that do have 'arcade' in the navigation bar
		$user = User::loadUser(Yii::app()->user->id);
		if(!$user || $user->role == PLAYER){
			$this->layout = '//layouts/column1_no_arcade';
		}else{
			$this->layout = '//layouts/column1';
		}
		$dataProvider=new CActiveDataProvider('User', array(
			'criteria'=>array(
		        'condition'=>'status>'.User::STATUS_BANNED,
		    ),
			'pagination'=>array(
				'pageSize'=>Yii::app()->fbvStorage->get("settings.pagination_size"),
			),
		));

		$this->render('/user/index',array(
			'dataProvider'=>$dataProvider,
		));
	}

}