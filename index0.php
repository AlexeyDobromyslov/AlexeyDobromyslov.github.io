<?php require_once "func.php";
global $main;
global $page;
global $flag_page;
global $kol_page;
?>
 <div id="main">
 <form method="get" action="index.php" id="searchform">
 <div class="fakesearch" id="master">
 <div class="search" id="fake">
     <div class="fs">
	   
	   <button type="button" class="rts">&#10006;</button>
	   <input name="searchtext" placeholder="введите кол-во шаблонов..." type="text" autocomplete="on" class="is" id="searchtext">
	   <button type="submit" class="bts" name="search" id="search">&#10132;</button>
	 </div>
 
 </div>
 <div></div>
 </div>
 <div class="container0">
 <div class="container2">
 


<div class="form1 form10" id="block">
<div style="position: relative;">
<span class="forh2nb" >
  Фильтры
  <hr class="forhr1" color="red">
  </span>
 <span>
  Регион:<br>
 <div class="lab">
  <input type="checkbox" value="москва" class="check" id="tcheck0"/> 
   <label for="tcheck0"> Москва</label><br>
   <input type="checkbox" value="питер" class="check" id="tcheck1"/> 
   <label for="tcheck1"> Санкт-Петербург</label><br>
   <input type="checkbox" value="пенза" class="check" id="tcheck2"/> 
   <label for="tcheck2"> Пензенская обл.</label><br>
   <input type="checkbox" value="хабаровск" class="check" id="tcheck3"/> 
   <label for="tcheck3"> Хабаровский край</label><br>
  </div>
  <div id="none">
  <div class="lab none">
  <input type="checkbox" value="рязань" class="check" id="tcheck4"/> 
   <label for="tcheck4"> Рязанская обл.</label><br>
    </div>
	<div class="lab none">
   <input type="checkbox" value="ханты" class="check" id="tcheck5"/> 
   <label for="tcheck5"> Ханты-Мансийский АО</label><br>
    </div>
	<div class="lab none">
   <input type="checkbox" value="красноярск" class="check" id="tcheck6"/> 
   <label for="tcheck6"> Красноярский край</label><br>
    </div>
	<div class="lab none">
   <input type="checkbox" value="липецк" class="check" id="tcheck7"/> 
   <label for="tcheck7"> Липецкая обл.</label><br>
    </div>
	
  </div>
 
  <button type="button" class="moretown">Ещё</button><br><br>

   <span>Уровень желаемого <br> дохода (руб):<br></span>
   <div class="limits">
   <input type="text" class="salaryl" value="от:" readonly=true ><input type="text" size="10" class="textbox" name="downsalary"><br>
   </div>
   <div class="limits">
   <input type="text" class="salaryl" value="до:" readonly=true ><input type="text" size="10" class="textbox" name="topsalary"><br>
   </div>
   <div class="lab">
   <input type="checkbox" class="check" id="nonesal" name="nonesal"/> 
   <label for="nonesal"> доход по договоренности</label><br>
   </div><br>
   
    <span>Опыт работы:<br></span>
		<div class="lab">
		<input type="checkbox" value="0" class="check" id="wcheck0" name="exper[]"/> 
		<label for="wcheck0"> нет опыта </label><br>
		<input type="checkbox" value="1" class="check" id="wcheck1" name="exper[]"/> 
		<label for="wcheck1"> до года</label><br>
		<input type="checkbox" value="3" class="check" id="wcheck2" name="exper[]"/> 
		<label for="wcheck2"> от 1 до 3 лет</label><br>
		<input type="checkbox" value="6" class="check" id="wcheck3" name="exper[]"/> 
		<label for="wcheck3"> от 3 до 6 лет</label><br>
		<input type="checkbox" value="10" class="check" id="wcheck4" name="exper[]"/> 
		<label for="wcheck4"> более 6 лет</label><br>
  </div><br>
 
  <span>Возраст:<br></span>
   <div class="limits">
   <input type="text" class="salaryl" value="от:" readonly=true ><input type="text" size="10" class="textbox" name="downage"><br>
    </div>
    <div class="limits">
  <input type="text" class="salaryl" value="до:" readonly=true ><input type="text" size="10" class="textbox"  name="topage"><br>
   </div><br>
   
  
     <span>Пол:<br></span>
		<div class="lab1">
		<input type="radio" value="н" class="radio" name="mf" id="radio0" checked="checked";/> 
		<label for="radio0"> неважно </label><br>
			<input type="radio" value="м" class="radio" name="mf" id="radio1"/> 
		<label for="radio1"> мужской </label><br>
			<input type="radio" value="ж" class="radio" name="mf" id="radio2"/> 
		<label for="radio2"> женский </label><br>
  </div><br>
   <div id="shortform">
  
  <span>Тип занятости:<br></span>
		<div class="lab1">
		<input type="radio" value="н" class="radio" name="type" id="typeradio0" checked="checked";/> 
		<label for="typeradio0"> Не имеет значения</label><br>
			<input type="radio" value="Полная" class="radio" name="type" id="typeradio1"/> 
		<label for="typeradio1"> Полная занятость </label><br>
			<input type="radio" value="Частичная" class="radio" name="type" id="typeradio2"/> 
		<label for="typeradio2"> Частичная занятость</label><br>
			<input type="radio" value="Стажировка" class="radio" name="type" id="typeradio3"/> 
		<label for="typeradio3"> Стажировка</label><br>
  </div><br>
  
  
      <span>График работы:<br></span>
		<div class="lab">
		<input type="checkbox" value="Обычный график" class="check" id="graphcheck0" name="schedule[]"/> 
		<label for="graphcheck0"> Обычный график</label><br>
		<input type="checkbox" value="Гибкий график" class="check" id="graphcheck1" name="schedule[]"/> 
		<label for="graphcheck1"> Гибкий график</label><br>
		<input type="checkbox" value="Сменный график" class="check" id="graphcheck2" name="schedule[]"/> 
		<label for="graphcheck2"> Сменный график</label><br>
		<input type="checkbox" value="Вахтовый метод" class="check" id="graphcheck3" name="schedule[]"/> 
		<label for="graphcheck3"> Вахтовый метод</label><br>
		<input type="checkbox" value="Удаленная работа" class="check" id="graphcheck4" name="schedule[]"/> 
		<label for="graphcheck4"> Удаленная работа</label><br>
  </div><br>
  
      <span>Образование:<br></span>
		<div class="lab">
		<input type="checkbox" value="Доктор наук" class="check" id="stcheck0" name="educ[]"/> 
		<label for="stcheck0"> Доктор наук</label><br>
		<input type="checkbox" value="Кандидат наук" class="check" id="stcheck1" name="educ[]"/> 
		<label for="stcheck1"> Кандидат наук</label><br>
		<input type="checkbox" value="Высшее" class="check" id="sthcheck2" name="educ[]"/> 
		<label for="sthcheck2"> Высшее</label><br>
		<input type="checkbox" value="Среднее специальное" class="check" id="stcheck3" name="educ[]"/> 
		<label for="stcheck3"> Среднее специальное</label><br>
		<input type="checkbox" value="Неполное высшее" class="check" id="stcheck4" name="educ[]"/> 
		<label for="stcheck4"> Неполное высшее</label><br>
		<input type="checkbox" value="Cреднее" class="check" id="stcheck5"/> 
		<label for="stcheck5"> Среднее</label><br>
		<input type="checkbox" value="Неполное среднее" class="check" id="stcheck6" name="educ[]"/> 
		<label for="stcheck6"> Неполное среднее</label><br>
		<input type="checkbox" value="Учащийся школы" class="check" id="stcheck7" name="educ[]"/> 
		<label for="stcheck7"> Учащийся школы</label><br>
  </div><br>
  
    
   <button type="submit" class="filtr" name="search2" id="fil">Применить фильтры</button><br>
   <button type="button" class="filtr" id="reset0">Cбросить фильтры</button>
   </div>
   
  </span>
  </div>
  
</div>



</div>
<div class="container1">
<div id="size">
 <?php 


$flag_page=0;

if(isset($_GET['search']) or isset($_GET['search2']) or isset($_GET['searchpage']) ){
		
		$main=$_GET['searchtext'];
		
        if(is_numeric($main)&&strlen($main)<5){
			
			
			if($main>0){
			$flag_page=1;
		
		if(isset($_GET['searchpage'])&&!isset($_GET['flag'])){//пользователл перешел на сгенерированный нимер страницы или ещё не сделал это
			$page=$_GET['searchpage'];
		}else{
			$page=1;
		}
		if(isset($_GET['flag'])){//пользователь ввел номер страницы
			if(is_numeric($_GET['searchpage'])&&strlen($_GET['searchpage'])<5){
				if($_GET['searchpage']>=1&&$_GET['searchpage']<=$_GET['flag']){
					$page=$_GET['searchpage'];
				}
			}
		}
		if(isset($_GET['search']) or isset($_GET['search2'])){//новый поиск всё обнуляем
			$page=1;
		}
		
		
		
			$limit=top_limit(($page-1)*20+20, $main);
			for($i=($page-1)*20; $i<$limit; $i++){
				
			echo "<div class='form fform'> 
  <div>
  <span class='forh2' > Шаблон анкеты №",$i+1,"
  </span>
  <hr class='forhr' color='red'>
  <span>
  Возраст: ---<br>
  Зарплата: ---<br>
  Опыт работы: ---<br>
  Последнее место работы: ---<br>
  </span>
  </div>

  </div>";
			}
			
			
			
			}
		}
	


}
?>









</div>

</div>
</div>
<div id="pagenavigator" class="pagenav">
<div class="all_nav">
<?php 


if($flag_page==1){
$kol_page=ceil($main/20);
if($kol_page!=1){
	
	
	
	
	
	
	
	if($page==1){
		echo "<div class='pages'>";
		echo "<div class='between'>";
		echo "<div class='for_main'><a href=?searchpage=1&searchtext=",$main,"#popup class='main_num'>1</a></div>";
		echo "<div class='for_num'><a href=?searchpage=2&searchtext=",$main," class='number'>2</a></div>";
		echo "</div>";
		echo "</div>";
		if($kol_page>2){
		echo "<a href=?searchpage=",$kol_page,"&searchtext=",$main,"><div class='arrow'>
			<div class='right_arrow'></div>
			<div class='right_arrow' style='left: -8px;'></div>
			</div></a>";	
		}
	}elseif($page==$kol_page){
		if($kol_page>2){
		echo "<a href=?searchpage=1&searchtext=",$main,"><div class='arrow'>
			<div class='left_arrow' style='left: 8px;'></div>
			<div class='left_arrow' ></div>
			</div></a>";	
		}
		echo "<div class='pages'>";
		echo "<div class='between'>";
		echo "<div class='for_num'><a href=?searchpage=",$page-1,"&searchtext=",$main," class='number'>",$page-1,"</a></div>";
		echo "<div class='for_main'><a href=?searchpage=",$page,"&searchtext=",$main,"#popup class='main_num'>",$page,"</a></div>";
		echo "</div>";
		echo "</div>";
	}else{
		if($page-1>1){
			echo "<a href=?searchpage=1&searchtext=",$main,"><div class='arrow'>
			<div class='left_arrow' style='left: 8px;'></div>
			<div class='left_arrow' ></div>
			</div></a>";
		}
		echo "<div class='pages'>";
		echo "<div class='between'>";
		echo "<div class='for_num'><a href=?searchpage=",$page-1,"&searchtext=",$main," class='number'>",$page-1,"</a></div>";
		echo "<div class='for_main'><a href=?searchpage=",$page,"&searchtext=",$main,"#popup class='main_num'>",$page,"</a></div>";
		echo "<div class='for_num'><a href=?searchpage=",$page+1,"&searchtext=",$main," class='number'>",$page+1,"</a></div>";
		echo "</div>";
		echo "</div>";
		if($page+1<$kol_page){
			echo "<a href=?searchpage=",$kol_page,"&searchtext=",$main,"><div class='arrow'>
			<div class='right_arrow'></div>
			<div class='right_arrow' style='left: -8px;'></div>
			</div></a>";
		}
	}

}
}



?>
</div>
</div>
 
</form>
<form action="index.php">
<div id="popup" class="popup">
	 <a href="#pagenavigator" class="popup_area"></a>
	 <div class="popup_body">
		 <div class="popup_content">
		
			 <div style="width: 285px" >
			 <h3 style="margin: 5px 0;">Перейти на страницу</h3>
	          <div>Введите номер страницы (от 1 до <?php echo $kol_page?>):</div><br>
			  <input type="text" class="user_page" name="searchpage" id="user_page">
			</div>
			<input type="hidden" name="flag" value=<?php echo $kol_page?>>
			<input type="hidden" name="searchtext" value=<?php echo $main?>>
			<div class="choise">
			<button type="submit" class="confirm">Продолжить</button>
			<a href="#pagenavigator" class="popup_close">Отмена</a>
			</div>
	 </div>
	 </div>
  </div>
  </form>
<button type="button" class="up">&#8682;</button>
<div class="debug"  ></div>
 <div class="footer" id="footer">
 <button type="button" class="test">longfiltr</button>
 
 </div>
 </div>


