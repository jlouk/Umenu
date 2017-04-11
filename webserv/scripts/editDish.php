<?php
/**
 * Created by PhpStorm.
 * User: Johnny
 * Date: 4/6/2017
 * Time: 1:14 AM
 */

include("../incl/config-inc.php");
header('Content-Type: application/json');
$_POST = json_decode(file_get_contents('php://input'), true);
$userId = $_POST['userId'];
$dishId = $_POST['dishId'];

$categoryId = $_POST['categoryId'];
$restaurantId = $_POST['restaurantId'];
$dishName = $_POST['dishName'];
$description = $_POST['description'];
$price = $_POST['price'];

$query = "SELECT * FROM `users` WHERE userId = ".$userId.";";
$result = mysqli_query($db, $query);
$user = mysqli_fetch_assoc($result);
$result = [];
if ($user['manager']){
    $result['valid'] = 1;
    if ($dishId == -1){
        $query1 = "INSERT INTO dishes (categoryId, restaurantId, dishName, description, price) VALUES ($categoryId, $restaurantId, \"$dishName\", \"$description\", \"$price\");";
        mysqli_query($db, $query1);
    }
    else {
        $query2 = "UPDATE dishes SET categoryId=$categoryId,restaurantId=$restaurantId,dishName=\"$dishName\",description=\"$description\",price=\"$price\" WHERE dishId=$dishId;";
        mysqli_query($db, $query2);

    }
}
else{
    $result['valid'] = 0;
}
echo json_encode($result);

?>