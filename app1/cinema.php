<?php
    require_once __DIR__."/View/header.php";
    require_once __DIR__."/Controller/ListController.php";
    require_once __DIR__."/Controller/SearchController.php";
?>
<div class="container">
      <div class="row page_Movies--list" id="contenu">
          <h1>Prochainement au cinéma</h1>
          <hr>          
           <?php
           foreach($movie['movie'] as $key) {
                if(isset($key['title']))
                    echo '<div class="row">
                        <div class="col-md-2">
                        <img src="'.$key->poster->href.'" /> 
                        </div>
                        <div class="col-md-10">
                            <h2>'.$key['title'].'</h2>
                            <p>Année de production :'.$key['productionYear'].'</p>
                            <p>De : '.$key['castingShort']['directors'].'</p>
                            <p>Avec : '.$key['castingShort']['actors'].'</p>
                            <p>Synopsis : '.$key['synopsisShort'].'</p>
                            <form action="film.php" method="POST"> 
                                <input type="hidden" value="'.$key['code'].'" name="filmcode"> 
                                <button class="btn btn-primary btn-raised" type="submit">EN SAVOIR +</button>
                            </form>
                        </div>
                        </div>';
            }
            require_once __DIR__."/View/footer.php"; 
          ?>
       