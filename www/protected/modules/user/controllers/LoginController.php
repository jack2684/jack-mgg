<?php

class LoginController extends Controller
{
	public $defaultAction = 'login';
  
  public function filters() {
    return array( // add blocked IP filter here
        'IPBlock',
    );
  }
  
	/**
	 * Displays the login page
	 */
	public function actionLogin()
	{
		MGHelper::setFrontendTheme();  
    
		if (Yii::app()->user->isGuest) {
			$model=new UserLogin;
			// collect user input data
			if(isset($_POST['UserLogin']))
			{
				$model->attributes=$_POST['UserLogin'];
				// validate user input and redirect to previous page if valid
				if($model->validate()) {
					$model->setLastVisit();
					if (strpos(Yii::app()->user->returnUrl,'/index.php')!==false)
						$this->redirect(Yii::app()->controller->module->returnUrl);
					else
						$this->redirect(Yii::app()->user->returnUrl);
				}
			}
			// display the login form
			$this->render('/user/login',array('model'=>$model));
		} else
			$this->redirect(Yii::app()->controller->module->returnUrl);
	}

}