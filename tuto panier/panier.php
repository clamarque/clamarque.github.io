<?php 
	require '_header.php';
?>
<?php
if(isset($_GET['del'])) {
	$panier->del($_GET['del']);
}
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
					<span class="R_price"><?php echo $panier->count() ; ?></span>

				</li>
				<li class="total">
					TOTAL
				<span class="R_price"><?php echo number_format($panier->total(),2); ?>€</span>

				</li>
			</ul>
		<nav>
			
	</header>
	<body>
	<form method="post" action="panier.php">
	<table>
		<thead>
			<tr>
				<th></th>
				<th><span class="name">Product name</span></th>
				<th><span class="price">Price HT</span></th>
				<th><span class="quantity">Quantité</span></th>
				<th><span class="subtotal">Price TTC</span></th>
				<th><span class="action">Action</span></th>
			</tr>
		</thead>
		<tfoot>
			<tr>
				<th colspan="5"></th>
				<th>Total :<span class="total"><?php echo number_format($panier->total() * 1.196,2); ?>€</span></th>
			</tr>
		</tfoot>

		<?php
		$ids = array_keys($_SESSION['panier']); //permet de récuperer les clés du tableaux
		if(empty($ids)){
			$products = array();
		}
		else {
			$products = $DB->query('select * from products where id in ('.implode(',',$ids).')'); 
		}
		foreach ($products as $product):
		?>
			<tbody>
				<tr>
				<td><a href="#" class="img"><img src=""></a></td>
				<td><span class="name"><?php echo $product->name; ?></span></td>
				<td><span class="price"><?php echo number_format($product->prix,2); ?>€</span></td>
				<td><span class="quantity"><input type="text" name="panier[quantity][<?= $product->id ; ?>]" value="<?php echo $_SESSION['panier'][$product->id] ; ?>"></span></td>
				<td><span class="subtotal"><?php echo number_format($product->prix * 1.196,2); ?>€</span></td>
				<td><span class="action">
					<a href="panier.php?del=<?php echo $product->id; ?>" class="del"><img src="img/supp1.jpg" width="30" class="displayed"></a>
					</span></td>
				</tr>
			</tbody>

		<?php endforeach; ?>
		</table>
		<input type="submit" value="Recalculer">
		</form>

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
</body>
</html>