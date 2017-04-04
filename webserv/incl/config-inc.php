<?php

//
// Config file contains common scripts
//

//
// Fix for CORS 
//

//http://stackoverflow.com/questions/18382740/cors-not-working-php
if(isset($_SERVER['HTTP_ORIGIN'])){
	header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
	header('Access-Control-Allow-Credentials: true');
	header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
 
	exit(0);
}

//
// Database login information
//

$db_name = "db673534878";
$db_host = "db673534878.db.1and1.com";
$db_user = "dbo673534878";
$db_pass = "ForHonor&Valor";

//
// Connect to database
//

$db = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

if(mysqli_connect_errno()){
	echo('SQL Connect Error: '.mysqli_connect_error());
	exit;
}

// 
// Other configuration
//

?>