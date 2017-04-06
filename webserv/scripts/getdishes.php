<?php
/*
restaurants.php
prints out all entries in the restaurant table as JSON array
*/
include("../incl/config-inc.php");
header('Content-Type: application/json');
//http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
$restaurantId = $_POST['restaurantId'];
/*$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$restaurantId = $request->restaurantId;
if (isset($postdata)) {
$request = json_decode($postdata);
$username = $request->restaurantId;
if ($username != "") {
echo "Server returns: " . $username;
}
else {
echo "Empty username parameter!";
}
}
else {
echo "Not called properly with username parameter!";
}*/
$qry = "SELECT * FROM `dishes` WHERE `restaurantId` = " . $restaurantId . " LIMIT 15";
//$qry = "SELECT * FROM `dishes` WHERE `restaurantId` = 1";
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
mysqli_close($db);
?>
