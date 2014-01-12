<?php 
	require '_header.php';
?>
<?php
/*var_dump($DB->query('select * from products')); */ //affiche ce qu'il trouve dans la base
//var_dump($_SESSION['panier']); //permet de voir le contenu du panier
?>
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="style.css" />
		<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro|Pacifico' rel='stylesheet' type='text/css'> 
		<meta charset="UTF-8" />
	</head>

	<body>

	
	<header>
		<a href="index.php"><img src="img/chastore1.jpg" alt="chastore"></a>
		<a href="panier.php"><img src="img/panier.jpg" alt="panier" width="60" class="panier"></a>
		<nav>
			<ul class="panier1">
				<li class="items">
					ITEMS
					<span class="R_price" id="count"><?= $panier->count() ; ?></span>
				</li>
				<li class="total">
					TOTAL
					<span class="R_price" id="total"><?php echo number_format($panier->total(),2,',',''); ?>€</span>
				</li>
			</ul>
		<nav>		
	</header>
	<div class="home">
		<div class="row">
			<div class="wrap">
			<?php $products = $DB->query('select * from products'); ?>
			<?php foreach ( $products as $product): ?>
			<div class="box">
				<div class="product_full">
					<a href="#">
						<!--<img src="img/<?php echo $product->id; ?>.jpg" width="300"> -->
						<img src="img/android-512-black.png" width="300">
					</a>
					<div class="description">
						<?php echo $product->name; ?> : 
						<a href="#" class="price"><?php echo number_format($product->prix,2); ?>€</a>
					</div>
					<a href="addpanier.php?id=<?php echo $product->id; ?>" class="gift addPanier"><img src="img/gift.png" width="60"></a>
					<div class="rating">
						<span>Rating  :</span>
						   <a href="#" title="Donner 5 étoiles">★</a> 
						   <a href="#" title="Donner 4 étoiles">★</a>
						   <a href="#" title="Donner 3 étoiles">★</a> 
						   <a href="#" title="Donner 2 étoiles">★</a>
						   <a href="#" title="Donner 1 étoile">★</a>  	
					</div>
					<a class="add addPanier" href="addpanier.php?id=<?php echo $product->id; ?>" title="Ajouter"><img src="img/plus_sign1.png" width="40"></a>
				</div>
			</div>
			<?php endforeach ?>
		</div>
	</div>

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
</body>
</html>
