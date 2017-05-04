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
	
	$qry = "SELECT * FROM `dishes` WHERE `restaurantId` = " . $restaurantId.";";
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

		$tempName = str_replace('&amp;','&',$row['dishName']);
		$tempName = str_replace('&comma;',',', $tempName);
		$tempName = str_replace('&apos;','\'', $tempName);
		$rowarr['dishName'] = $tempName;


        $tempDes = str_replace('&amp;','&',$row['description']);
        $tempDes = str_replace('&comma;',',', $tempDes);
        $tempDes = str_replace('&apos;','\'', $tempDes);
        $rowarr['description'] = $tempDes;


        $rowarr['price'] = $row['price'];
		$rowarr['rating'] = $row['rating'];
		$rowarr['numRatings'] = $row['numRatings'];
		array_push($arr,$rowarr);
	}
	
	echo(json_encode($arr));
} else {
	echo("POST DATA NOT AVAILABLE");
}

mysqli_close($db);

?>