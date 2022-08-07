
<?php require_once "func.php"?>
<!doctype html>
<html>
 <head>
  <title>masterpage</title>
  <meta viewport content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">
<link rel="stylesheet" href='xstyles1.css' type="text/css">
 <script src="testjs0.js"></script>

 </head>
 <body onload="js();">
  
   <div class="header">
         <button type="button" class="btm">&#8801;</button>
         <div class="halfmenu">
         <a href="<?php echo smallpath()?>?page=index" class="menua" style="display: none">Главная</a>
         <a href="<?php echo smallpath()?>?page=about" class="menua" style="display: none">О нас</a>
         <a href="<?php echo smallpath()?>?page=contact" class="menua" style="display: none">Контакты</a>
		 </div>
		 
		
			 
		 <div class="halfmenu">
         <a class="blockmenua" style="display: none">Войти</a>
         <a class="blockmenua" style="display: none">Зарегистрироваться</a>
		 </div>	 
		 
		 
		 
		
		 
		 </div>
 
   
      <div><?php include_once($content); ?></div>

      <div id="foot" class="footer">
	  <hr color="#ea0030" size="3px">
	  <div class="year">
	  <?php 
	  echo "&#169; ".date('Y');
	  ?>
	  </div>
	  </div>
 </body>
 </html>