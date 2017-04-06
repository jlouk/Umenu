<?php
/**
 * Created by PhpStorm.
 * User: Johnny
 * Date: 4/6/2017
 * Time: 12:33 AM
 */

include("../incl/config-inc.php");
header('Content-Type: application/json');
$_POST = json_decode(file_get_contents('php://input'), true);
$email = $_POST['email'];
$password = $_POST['password'];


$query = "SELECT * FROM `users` WHERE email = \"".$email."\" AND password = \"".$password."\";";
$result = mysqli_query($db, $query);
$arr = array();

while ($row = mysqli_fetch_array($result)){
    $rowarr = array();
    $rowarr['userId'] = $row['userId'];
    $rowarr['email'] = $row['email'];
    $rowarr['password'] = $row['password'];
    $rowarr['notifications'] = $row['notifications'];
    $rowarr['manager'] = $row['manager'];
    $rowarr['restaurantId'] = $row['restaurantId'];
    array_push($arr,$rowarr);
}

echo(json_encode($arr));
mysqli_close($db);

?>