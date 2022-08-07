


<?php 
echo "<script></script>";//костыль

$redirectflag=0;


	if(isset($_GET["page"])){
		$redirectflag=1;
	switch($_GET['page']){
		case 'about': 
		$content="about0.php";
        include("master.php");
		break;
		case 'contact': 
		$content="contact0.php";
        include("master.php");
		break;
		case 'index': 
		$content="index0.php";
        include("master.php");
		break;
	}
}

if($redirectflag==0){
$content="index0.php";
include("master.php");}


?>