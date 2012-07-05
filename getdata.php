<?php 
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
?>
