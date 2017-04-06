<?php

/*
restaurants.php

prints out all entries in the restaurant table as JSON array
*/

include("../incl/config-inc.php");
header('Content-Type: application/json');

$postdata = file_get_contents("php://input");
if(isset($postdata)) {
	$request = json_decode($postdata);
	$restaurantId = $request->restaurantId;
	
	$qry = "SELECT * FROM `dishes` WHERE `restaurantId` = " . $restaurantId . " LIMIT 15";
	$result = mysqli_query($db,$qry);
	$count = mysqli_num_rows($result);
	$arr = array();
	
	for($i=0; $i<$count; $i++)
	{
		$row = mysqli_fetch_array($result);
		$rowarr = array();
		$rowarr['dishId'] = $row['dishId'];
		$rowarr['categoryId'] = $row['categoryId'];
		$rowarr['restaurantId'] = $row['restaurantId'];
		$rowarr['dishName'] = $row['dishName'];
		$rowarr['description'] = $row['description'];
		$rowarr['price'] = $row['price'];
		array_push($arr,$rowarr);
	}
	
	echo(json_encode($arr));
} else {
	echo("POST DATA NOT AVAILABLE");
}

mysqli_close($db);

?>