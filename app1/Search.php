<?php
    require_once __DIR__."/View/header.php";
    require_once __DIR__."/Controller/SearchController.php";
?>


<div class="container">
      <div class="row page_Movies--list">
          <h1>Résultats de votre recherche</h1>
          <hr>          
           <?php
        if(isset($movie['movie'])){
            echo '<h3>"'.$_POST['q'].'" Sur My cake Movies</h3>';
           foreach($movie['movie'] as $key) {
        if(isset($key['title']))
            echo '
            <div class="row">
                    <div class="col-md-2">
                        <img src="'.$key->poster.'" /> 
                    </div>
                      <div class="col-md-10">
                        <h2>'.$key['title'].'</h2>
                        <p>année de production : '.$key['productionYear'].'</p>
                        <p>De : '.$key['castingShort']['directors'].'</p>
                        <p>Avec : '.$key['castingShort']['actors'].'</p>
                       <form action="film.php" method="POST"> 
                       
                <input type="hidden" value="'.$key['code'].'" name="filmcode"> 
                <button class="btn btn-primary btn-raised" type="submit">EN SAVOIR +</button>
                       
                        </form>
                        
                    </div>
                    </div>';
             
    }
          ;
        }
else { echo 'Pas de film pour "'.$_POST['q'].'"';}

?>
<h1>Séries</h1>
<hr>
<?php
if(isset($movie['tvseries']))
{
foreach($movie['tvseries'] as $key) {
        if(isset($key['originalTitle'])){
            if(isset($key['poster'])){
                 echo '
            <div class="row">
                    <div class="col-md-2">
                        <img src="'.$key['poster']['href'].'" /> 
                    </div>';
            }
    
            echo '
                    <div class="col-md-10">
                        <h2>'.$key['originalTitle'].'</h2>
                       
                       <form action="series.php" method="POST"> 
                       
                <input type="hidden" value="'.$key['code'].'" name="filmcode"> 
                <button class="btn btn-primary btn-raised" type="submit">EN SAVOIR +</button>
                       
                        </form>
                    </div>
                    </div>';
        }
   
        
        
};
}
else { echo 'Pas de série pour "'.$_POST['q'].'"';}

 require_once __DIR__."/View/footer.php";
?>
