<!DOCTYPE html>
<html>
<head>

  <meta charset="utf-8">
  <title>Page Crawler Admin</title>
</head>
<body>

  <?php
  include_once('simple_html_dom.php');
  $result = dlPage("https://www.allmenus.com/wi/madison/19164-state-street-brats/menu/");
  //var_dump($result);
  function dlPage($href) {
    $html = file_get_html($href);
    $titles = [];
    $descriptions = [];
    $prices = [];
    $desCounter = 0;
    $titleCounter = 0;
    $priceCounter = 0;
    foreach($html->find('span.item-title') as $element){
      $titles[$titleCounter] = $element;
      $titleCounter++;
    }
    foreach($html->find('span.item-price') as $item){
      $prices[$priceCounter] = $item;
      $priceCounter++;
    }
    foreach($html->find('p.description') as $des){
      $descriptions[$desCounter] = $des;
      $desCounter++;
    }
    $titleSize =  sizeof($titles);
    $desSize =  sizeof($descriptions);
    $priceSize = sizeof($prices);
    if (($titleSize == $desSize) && ($desSize == $priceSize)){//they are equal then
      $host_name  = "db673534878.db.1and1.com";
      $database   = "db673534878";
      $user_name  = "dbo673534878";
      $password   = "ForHonor&Valor";
      $connect = mysqli_connect($host_name, $user_name, $password, $database);
      if(mysqli_connect_errno())
      {
        echo '<p>Verbindung zum MySQL Server fehlgeschlagen: '.mysqli_connect_error().'</p>';
      }
      else
      {
        echo '<p>Verbindung zum MySQL Server erfolgreich aufgebaut.</p>';
      }
    }
    else{
      echo "there was an error with the page crawler!!";
    }
  }
  ?>

</body>
</html>
