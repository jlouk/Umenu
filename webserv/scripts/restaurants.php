<?php

/*
restaurants.php

prints out all entries in the restaurant table as JSON array
*/

include("../incl/config-inc.php");
require_once("../incl/GeoLocation.php");

$GeoLocation = 'AnthonyMartin\GeoLocation\GeoLocation';
header('Content-Type: application/json');

$postdata = file_get_contents("php://input");
restaurantQuery($GeoLocation, $postdata, $db);
function restaurantQuery($GeoLocation, $postdata, $db)
{
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $lat = $request->lat;
        $lon = $request->lon;
        $dist = $request->dist;

        // GeoLocation of provided lat,lon values
        $loc = $GeoLocation::fromDegrees($lat, $lon);
        $bounds = $loc->boundingCoordinates($dist, "mi");

        // Build SQL query
        $qry = "SELECT * FROM `restaurants` WHERE `latitude`>=" . $bounds[0]->getLatitudeInDegrees() . " AND `latitude`<=" . $bounds[1]->getLatitudeInDegrees();
        if ($bounds[0]->getLongitudeInDegrees() > $bounds[1]->getLongitudeInDegrees()) {
            $qry = $qry . " AND (`longitude`>=" . $bounds[0]->getLongitudeInDegrees() . " OR `longitude`<=" . $bounds[1]->getLongitudeInDegrees() . ")";
        } else {
            $qry = $qry . " AND `longitude`>=" . $bounds[0]->getLongitudeInDegrees() . " AND `longitude`<=" . $bounds[1]->getLongitudeInDegrees();
        }

        $result = mysqli_query($db, $qry);
        $count = mysqli_num_rows($result);
        $arr = array();

        for ($i = 0; $i < $count; $i++) {
            $row = mysqli_fetch_array($result);
            $rowarr = array();
            $rowarr['restaurantId'] = $row['restaurantId'];
            $rowarr['restaurantName'] = $row['restaurantName'];
            $rowarr['latitude'] = $row['latitude'];
            $rowarr['longitude'] = $row['longitude'];
            // Calculate distance of restaurant from user's location
            $tempLoc = $GeoLocation::fromDegrees($rowarr['latitude'], $rowarr['longitude']);
            $rowarr['distance'] = $loc->distanceTo($tempLoc, "mi");

            array_push($arr, $rowarr);
        }

        // Sort restaurants by distance from user
        $sort_col = array();
        foreach ($arr as $innerArr) {
            array_push($sort_col, $innerArr['distance']);
        }
        array_multisort($sort_col, $arr);

        echo(json_encode($arr));
    } else {
        echo("POST DATA NOT AVAILABLE");
    }

    mysqli_close($db);
}
?>
