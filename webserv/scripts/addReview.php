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

/*$testQuery = "SELECT * FROM reviews where userId = \"$userId\" and dishId = \"$dishId;";
$testResult = mysqli_query($db,$testQuery);*/

$query = "SELECT * FROM dishes where dishId = $dishId;";
$results = mysqli_query($db, $query);
$item = '';
while ($data = mysqli_fetch_assoc($results)){
    $item = $data;
    break;
}

if ($item){
    $numRatings = $item['numRatings'] + 1;
    $average = ($rating + $item['rating']) / $numRatings;
    $sql = "UPDATE dishes SET rating = $average WHERE dishId = $dishId;";
    mysqli_query($db,$sql);
    echo "1";
}
else {
    echo "0";
}

?>