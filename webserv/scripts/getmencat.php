<?php

/*
restaurants.php

prints out all entries in the restaurant table as JSON array
*/

include("../incl/config-inc.php");
header('Content-Type: application/json');

$restaurantId = $_POST['restaurantId'];
$results = restaurantQuery($restaurantId);
echo $results;


function restaurantQuery($restaurantId)
{
    $qry = "SELECT * FROM `menu_categories` WHERE `restaurantId` = " . $restaurantId;
    $result = mysqli_query($db, $qry);
    $count = mysqli_num_rows($result);
    $arr = array();

    for ($i = 0; $i < $count; $i++) {
        $row = mysqli_fetch_array($result);
        $rowarr = array();
        $rowarr['categoryId'] = $row['categoryId'];
        $rowarr['categoryName'] = $row['categoryName'];
        $rowarr['restaurantId'] = $row['restaurantId'];
        array_push($arr, $rowarr);
    }
    mysqli_close($db);
    return (json_encode($arr));
}
?>
