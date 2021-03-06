<?php

class DefaultController extends Controller
{
    public function filters()
    {
        return array(
            'IPBlock',
            'accessControl',
        );
    }

    public function accessRules()
    {
        return array(
            array('allow',
                'actions' => array('index'),
                'roles' => array(EDITOR,INSTITUTION, ADMIN),
            ),
            array('deny',
                'users' => array('*'),
            ),
        );
    }

    public function actionIndex()
    {
        // renders the view file 'protected/views/admin/index.php'
        // using the default layout 'protected/views/layouts/main.php'

        $tool_groups = array();

        $registered_tools = Yii::app()->fbvStorage->get("admin-tools");
        foreach ($registered_tools as $tool) {
            if (is_array($tool['roles'])) {
                foreach ($tool['roles'] as $role) {
                    if (Yii::app()->user->checkAccess($role)) {
                        if (!array_key_exists($tool["group"], $tool_groups))
                            $tool_groups[$tool["group"]] = array();

                        $tool['url'] = $this->createUrl($tool['url']);
                        $tool_groups[$tool["group"]][] = (object)$tool;
                        break;
                    }
                }
            }
        }

        $this->render('index',
            array(
                'tool_groups' => $tool_groups
            )
        );
    }
}