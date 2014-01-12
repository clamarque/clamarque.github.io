<?php
	require 'db.class.php';
	require 'panier.class.php';
	$DB = new DB(); //initialisé l'objet
	$panier = new panier($DB);
?>