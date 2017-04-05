<?php

/*
restaurants.php

prints out all entries in the restaurant table as JSON array
*/

include("../incl/config-inc.php");
header('Content-Type: application/json');

//http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
$restaurantId = $_POST['restaurantId'];
$result = $restaurantQuery($restaurantId);
echo $result;

/**
 * Function created by JL to make this more testable.  If problems, revert to prior commits
 * @param $restaurantId
 * @return string
 */

function restaurantQuery($restaurantId)
{
    $qry = "SELECT * FROM `dishes` WHERE `restaurantId` = " . $restaurantId . " LIMIT 15";
//$qry = "SELECT * FROM `dishes` WHERE `restaurantId` = 1";
    $result = mysqli_query($db, $qry);
    $count = mysqli_num_rows($result);
    $arr = array();

    for ($i = 0; $i < $count; $i++) {
        $row = mysqli_fetch_array($result);
        $rowarr = array();
        $rowarr['dishId'] = $row['dishId'];
        $rowarr['categoryId'] = $row['categoryId'];
        $rowarr['restaurantId'] = $row['restaurantId'];
        $rowarr['dishName'] = $row['dishName'];
        $rowarr['description'] = $row['description'];
        $rowarr['price'] = $row['price'];
        array_push($arr, $rowarr);
    }

    mysqli_close($db);
    return (json_encode($arr));

}

?>