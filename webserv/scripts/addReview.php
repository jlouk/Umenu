<?php
/**
 * Created by PhpStorm.
 * User: Johnny
 * Date: 4/30/2017
 * Time: 7:23 PM
 */

include("../incl/config-inc.php");
header('Content-Type: application/json');
$_POST = json_decode(file_get_contents('php://input'), true);


$dishId = $_POST['dishId'];
$rating = $_POST['rating'];
$value = [];
/*$testQuery = "SELECT * FROM reviews where userId = \"$userId\" and dishId = \"$dishId;";
$testResult = mysqli_query($db,$testQuery);*/


$query = "SELECT * FROM dishes where dishId = $dishId;";
$results = mysqli_query($db, $query);
$item = [];
while ($data = mysqli_fetch_assoc($results)){
    $item = $data;
    break;
}
if ($item['dishId']){
    $numRatings = $item['numRatings'];
    $average = (($item['rating'] * $numRatings) + $rating) / ($numRatings + 1);
    $numRatings= $numRatings+1;
    $sql = "UPDATE dishes SET rating = $average, numRatings = $numRatings WHERE dishId = $dishId;";
    mysqli_query($db,$sql);
    $value['average'] = $average;
    $value['numRatings'] = $numRatings;
    $value['valid'] = 1;
}
else {
    $value['valid'] = 0;
}
echo json_encode($value);
?>