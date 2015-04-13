<?php
    require_once __DIR__."/../Model/api-allocine-helper.php";
    $film = new AlloHelper;

    if(isset($_POST['submit'])) {
    try
        {
            $filmsearch         = $_POST['q'];
            $movie   = $film->search($filmsearch);
            // print_r($movie->getArray());
        }
        catch( ErrorException $error )
        {
            // En cas d'erreur
            echo "Erreur n°", $error->getCode(), ": ", $error->getMessage(), PHP_EOL;
        }
    }
?>
