<?php
/**
 * Created by PhpStorm.
 * User: Johnny
 * Date: 4/6/2017
 * Time: 12:33 AM
 */

include("../incl/config-inc.php");
header('Content-Type: application/json');

$username = $_POST['username'];
$password = $_POST['password'];

$query = "SELECT * FROM `users` WHERE username = ". $username . "AND password = " . $password";";

$result  mysqli_query($db, $query);
$count = mysqli_num_rows($result);
$arr = array();

while ($row  mysqli_fetch_array($result)){
    $rowarr = array();
    $rowarr['username'] = $row['username'];
    $rowarr['password'] = $row['password'];
    $rowarr['isAdmin'] = $row['isAdmin'];
}

echo(json_encode($arr));
mysqli_close($db);

?>