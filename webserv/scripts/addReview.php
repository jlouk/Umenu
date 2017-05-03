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


$userId = $_POST['userId'];
$dishId = $_POST['dishId'];
$rating = $_POST['rating'];
$comment = $_POST['comment'];
$date = $_POST['date'];

$testQuery = "SELECT * FROM reviews where userId = \"$userId\" and dishId = \"$dishId;";
$testResult = mysqli_query($db,$testQuery);

if (mysql_num_rows($testResult == 0)){
    $query = "INSERT INTO reviews (userId, dishId, rating, comment, date) VALUES ($userId,$dishId,\"$rating\",\"$comment\")";
    $result = mysqli_query($db, $query);

    echo "1";
}
else{
    echo "0";
}


?>