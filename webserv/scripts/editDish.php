<?php
/**
 * Created by PhpStorm.
 * User: Johnny
 * Date: 4/6/2017
 * Time: 1:14 AM
 */

include("../incl/config-inc.php");
header('Content-Type: application/json');

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
if ($user['manager']){
    $query = "UPDATE dishes SET categoryId=$categoryId,restaurantId=$restaurantId,dishName=$dishName,description=$description,price=$price WHERE dishId=$dishId;";
    mysqli_query($db, $query);
}


?>