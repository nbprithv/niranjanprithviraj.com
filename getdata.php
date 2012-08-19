<?php 
require_once('magpierss/rss_fetch.inc');
$action = $_REQUEST['action'];
function getGitHubData(){
	$rss_url = "https://github.com/nbprithv.atom";
	$github_public = fetch_rss($rss_url);	
	header('Content-Type:application/json');
	$callback = $_REQUEST['callback'];
	if($callback){
		echo $callback."(".json_encode($github_public->items).")";
	}else{
		echo json_encode($github_public->items);
	}
}
function getNikeData(){
	$callback = $_REQUEST['callback'];
	$url = "http://nikeplus.nike.com/nikeplus/v1/services/widget/get_public_run_list.jsp?userID=739496295";
        $ch = curl_init(); 
        curl_setopt($ch, CURLOPT_URL, $url); 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
        $output = curl_exec($ch); 
        curl_close($ch);      
	$xml = simplexml_load_string($output);
	$json = json_encode($xml);
	$array = json_decode($json,TRUE);
	header('Content-Type:application/json');
	echo $callback."(".$json.")";
}
switch ($action){
	case 'github':
		getGitHubData();
	break;
	case 'nike':
		getNikeData();
	break;
	default:
		return 0;
	break;
}
?>
