<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Stupid Robot</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon(s) in the root directory -->

        <!--link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script-->
    </head>
    <body id="splashContent">
        <!--[if lt IE 8]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
			
        <!-- Add your site or application content here -->
               			<div id="loading">loading!</div>

        <div class="manifest" id="tree">
        	<img src="<?php echo GamesModule::getAssetsUrl(); ?>/stupidRobot/images/Bitmap3.jpg" />
         	<img src="<?php echo GamesModule::getAssetsUrl(); ?>/stupidRobot/images/Bitmap7.jpg" />
         	<img src="<?php echo GamesModule::getAssetsUrl(); ?>/stupidRobot/images/Bitmap5.jpg" />
         	<img src="<?php echo GamesModule::getAssetsUrl(); ?>/stupidRobot/images/Bitmap6.jpg" />
         	<img src="<?php echo GamesModule::getAssetsUrl(); ?>/stupidRobot/images/FlashAICB.png" />
         	<img src="<?php echo GamesModule::getAssetsUrl(); ?>/stupidRobot/images/tree.jpg" />
        </div>
              			
	       	     <canvas id="canvas" width=960 height=180></canvas>
       			<div id="container">
					<a href="<?php echo $game_url; ?>/StupidRobot/play" id="bootButton" class="clearfix button">BOOT<br>GAME</a>
	       	        <h1 class="clearfix">STUPID ROBOT</h1>
					<p class="scrollText">&nbsp;</p>
					<p class="scrollText">&nbsp;</p>
					<p class="scrollText">&nbsp;</p>
					<p class="scrollText">&nbsp;</p>
					<p class="scrollText">&nbsp;</p>
					<p class="scrollText">&nbsp;</p>
					<p id="lastScrollText">&nbsp;</p>
					<br>
					<p class="scrollText">&nbsp;</p>
			</div>
		<!-- script src="http://code.createjs.com/preloadjs-0.3.0.min.js"></script>
		<script src="http://code.createjs.com/easeljs-0.6.0.min.js"></script>
		<script src="http://code.createjs.com/tweenjs-0.4.0.min.js"></script>
		<script src="http://code.createjs.com/movieclip-0.6.0.min.js"></script>

		<script src="js/animation_intro.js"></script>
        <script src="js/intro.js"></script-->

       
    </body>
</html>	
