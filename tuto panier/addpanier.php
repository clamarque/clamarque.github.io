<?php
	require '_header.php';
	$json = array('error' => true);
	if(isset($_GET['id'])) {
		$product =$DB->query ('select id from products where id=:id', array('id' => $_GET['id']));
		if(empty($product)){
			$json['message'] = "Ce produit n'existe pas";
		}
		$panier->add($product[0]->id);
		$json['error'] = false;
		$json['total'] = number_format($panier->total(),2,',','');
		$json['count'] = $panier->count();
		$json['message'] ="le produit a bien été ajouté à votre panier ";
	}
	else {
		$json['message'] = "Vous n avez pas sélectionnée de produit à ajouter au panier";
	}

	echo json_encode($json);

?>