
<?php
    require_once __DIR__."/../Model/api-allocine-helper.php";

    $film = new AlloHelper;

    $filter = $_GET['filter'];
    $order = 'dateasc';
    $count = 20;
    $page = 1;

    try
        {
            // Envoi de la requête
        $movie = $film->movielist($filter,$order,$count,$page);

            // Afficher toutes les données
            //  print_r($movie->getArray());
        }
        catch( ErrorException $error )
        {
            // En cas d'erreur
            echo "Erreur n°", $error->getCode(), ": ", $error->getMessage(), PHP_EOL;
        }
?>
