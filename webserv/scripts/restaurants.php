<?php
/*
restaurants.php
prints out all entries in the restaurant table as JSON array
*/
include("../incl/config-inc.php");
header('Content-Type: application/json');
$qry = "SELECT * FROM `restaurants`";
$result = mysqli_query($db,$qry);
$count = mysqli_num_rows($result);
$arr = array();
for($i=0; $i<$count; $i++)
{
	$row = mysqli_fetch_array($result);
	$rowarr = array();
	$rowarr['restaurantId'] = $row['restaurantId'];
	$rowarr['restaurantName'] = $row['restaurantName'];
	$rowarr['latitude'] = $row['latitude'];
	$rowarr['longitude'] = $row['longitude'];
	array_push($arr,$rowarr);
}
echo(json_encode($arr));
mysqli_close($db);
?>
