<?php
    require_once __DIR__."/../Model/api-allocine-helper.php";
    


$helper = new AlloHelper;
$code = $_POST['filmcode'];
$profile = 'medium';

try
    {
        // Envoi de la requête
        $movie = $helper->movie( $code, $profile );
        // Afficher toutes les données
       //print_r($movie->getArray());
    }
    catch( ErrorException $error )
    {
        // En cas d'erreur
        echo "Erreur n°", $error->getCode(), ": ", $error->getMessage(), PHP_EOL;
    }

?>
