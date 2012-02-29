<?php

/**
 * Implementation of a export plugin. Exports the game statistics in a tab 
 * separated CSV file.
 */
Yii::import('ext.CSVExport.CSVExport');

class GameStatisticsExportPlugin extends MGExportPlugin {
  public $enableOnInstall = true;
     
  function init() {
    parent::init();
  }
  
  /**
   * Adds a checkbox that allows to activate/disactivate the use of the plugin on the 
   * export form.
   * 
   * @param object $form the GxActiveForm rendering the export form
   * @param object $model the ExportForm instance holding the forms values
   */
  function form(&$form, &$model) {
    $legend = CHtml::tag("legend", array(), Yii::t('app', 'Plugin: Game Statistics Export'));
    
    $value = ((isset($_POST['ExportForm']) && isset($_POST['ExportForm']['GameStatisticsExportPlugin']) && isset($_POST['ExportForm']['GameStatisticsExportPlugin']['active']))? $_POST['ExportForm']['GameStatisticsExportPlugin']['active'] : 1);
    $label = CHtml::label(Yii::t('app', 'Active'), 'ExportForm_GameStatisticsExportPlugin_active');
    
    $buttons= CHtml::radioButtonList( 
        "ExportForm[GameStatisticsExportPlugin][active]", 
        $value, 
        MGHelper::itemAlias("yes-no"), 
        array("template" => '<div class="checkbox">{input} {label}</div>', "separator" => ""));
    
    return CHtml::tag("fieldset", array(), $legend . '<div class="row">' . $label . $buttons . '<div class="description">' . Yii::t('app', "Export game use statistics as csv file") . '</div></div>');
  }
  
  /**
   * Creates the CSV export file in the temporary folder and add the header row  
   * and the statistics for each game in the file.
   * 
   * @param object $model the ExportForm instance
   * @param object $command the CDbCommand instance holding all information needed to retrieve the images' data
   * @param string $tmp_folder the full path to the temporary folder
   */
  function preProcess(&$model, &$command, $tmp_folder) {
    
    $stats = GamesModule::getStatistics();
    if ($stats) {
      $content = "Game Id\tGame Unique ID\tPlayed Games (started)\tPlayed Games (finished)\tFinished Games by Guests\tFinished Games by Registered Players\tNumber of Registered Users Playing the Game\tPlayers Total Score\n";
      
      foreach ($stats as $stat) {
        $content .= $stat->id . "\t";
        $content .= $stat->unique_id . "\t";
        $content .= $stat->cnt_played_games . "\t";
        $content .= $stat->cnt_played_games_finished . "\t";
        $content .= $stat->cnt_played_games_by_guests . "\t";
        $content .= $stat->cnt_played_games_by_users . "\t";
        $content .= $stat->cnt_users . "\t";
        $content .= $stat->sum_scored . "\t";
        $content .= "\n";
      }

      file_put_contents ($tmp_folder . $model->filename . '.gamestatistics.csv', $content);
    
    }
  }
}

?>
