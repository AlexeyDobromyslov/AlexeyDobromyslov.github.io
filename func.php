<?php 


function smallpath(){
$url=$_SERVER['REQUEST_URI'];
$without=explode('?', $url)[0];
$path=str_replace(explode('/',$without)[2], "", $without);//из-за директорий
return $path;
} 
function top_limit($page_end, $search_end){
	if($page_end<$search_end){
		return $page_end;
	}else{
		return $search_end;
	}
}






?>