<?php
/**
 * Created by PhpStorm.
 * User: Johnny
 * Date: 4/6/2017
 * Time: 1:01 AM
 */

include("../incl/config-inc.php");
header('Content-Type: application/json');
$_POST = json_decode(file_get_contents('php://input'), true);


$userId = $_POST['userId'];

$categoryId = $_POST['categoryId'];
$restaurantId = $_POST['restaurantId'];
$dishName = $_POST['dishName'];
$description = $_POST['description'];
$price = $_POST['price'];

if ($price == NULL or $price==''){
    echo "error";
}

$query = "SELECT * FROM `users` WHERE userId = " . $userId . ";";
$result = mysqli_query($db, $query);
$user = mysqli_fetch_assoc($result);
if ($user['manager']) {
    $query = "INSERT INTO dishes (categoryId, restaurantId, dishName, description, price) VALUES ($categoryId, $restaurantId, $dishName, $description, $price);";
    mysqli_query($db, $query);
}


?>