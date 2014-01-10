<?php

class ActivationController extends Controller
{
	public $defaultAction = 'activation';
  
	public function filters() {
    return array( // add blocked IP filter here
        'IPBlock',
    );
  }
  
	/**
	 * Activation user account
	 */
	public function actionActivation () {
		// Junjie Guan: if it is not login, I load another layouts that do have 'arcade' in the navigation bar
		$user = User::loadUser(Yii::app()->user->id);
		if(!$user || $user->role == PLAYER){
			$this->layout = '//layouts/column1_no_arcade';
		}else{
			$this->layout = '//layouts/column1';
		}
		$email = $_GET['email'];
		$activekey = $_GET['activekey'];
		if ($email&&$activekey) {
			$find = User::model()->notsafe()->findByAttributes(array('email'=>$email));
			if (isset($find)&&$find->status) {
			    $this->render('/user/message',array('title'=>UserModule::t("Player activation"),'content'=>UserModule::t("Your account is active.")));
			} elseif(isset($find->activekey) && ($find->activekey==$activekey)) {
				$find->activekey = UserModule::encrypting(microtime());
				$find->status = 1;
				$find->save();
        Flash::add("success", Yii::t('app', UserModule::t("Your account has been activated. You can now login")));
        $this->redirect(Yii::app()->controller->module->loginUrl);
			} else {
			    $this->render('/user/message',array('title'=>UserModule::t("Player activation"),'content'=>UserModule::t("Incorrect activation URL.")));
			}
		} else {
			$this->render('/user/message',array('title'=>UserModule::t("Player activation"),'content'=>UserModule::t("Incorrect activation URL.")));
		}
	}

}