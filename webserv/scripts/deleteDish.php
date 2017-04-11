<?php
/**
 * Created by PhpStorm.
 * User: Johnny
 * Date: 4/6/2017
 * Time: 1:18 AM
 */
include("../incl/config-inc.php");
header('Content-Type: application/json');
$_POST = json_decode(file_get_contents('php://input'), true);

$userId = $_POST['userId'];
$dishId = $_POST['dishId'];

$query = "SELECT * FROM `users` WHERE userId = ".$userId.";";
$result = mysqli_query($db, $query);
$user = mysqli_fetch_assoc($result);
$result1 = [];
if ($user['manager']){
    $result1['valid'] = 1;
    $query = "DELETE FROM dishes WHERE dishId = $dishId;";
    mysqli_query($db, $query);
}
else {
    $result1['valid'] = 0;
}
echo json_encode($result1);

?>