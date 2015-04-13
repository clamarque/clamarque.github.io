<?php
    require_once __DIR__."/View/header.php";
    require_once __DIR__."/Controller/DisplayController.php";
    require_once __DIR__."/Controller/SearchController.php";

?>

<div class="container">
      <div class="row">
          
<?php
    if(isset($movie['title']) && isset($movie['poster'])){
        echo '
            <h1>'.$movie['title'].'</h1>
            <hr>
            <div class="col-md-2">
                <img src="'.$movie['poster'].'" /> 
            </div>';
    }
?>
    <div class="col-md-1">
        <p>Sortie</p>
        <p>De</p>
        <p>Avec</p>
        <p>Genre</p>
        <p>Nationalité</p>
    </div>
    <div class="col-md-9">
        <?php
            if (isset($movie['release']) && ($movie['castingShort'])){
                echo '
                    <p>'.$movie['release']['releaseDate'].'</p>
                    <p>'.$movie['castingShort']['directors'].'</p>
                    <p>'.$movie['castingShort']['actors'].'</p>
                    <p>'.$movie['genre'][0]['$'].', '.$movie['genre'][1]['$'].'</p>
                    <p>'.$movie['nationality'][0]['$'].'</p>
        ';
            }
             ?>
              <div id="d1"></div>
    </div>
    </div>
    <div class="row">
       <h3>Synopsis</h3>
       <hr>
        <?php 
            if(isset($movie['synopsis'])){
                echo $movie['synopsis'];
            }
        ?>
    </div>
    <div class="row">
       <h3>Bandes-annonces et extraits</h3>
       <hr>
        <?php
            if(isset($movie['trailerEmbed'])){
                echo $movie['trailerEmbed'];
            }
        ?>
    </div> 
    <div class="row">
        <h3>Acteurs et Atrices</h3>
        <hr>
        <?php
    
                for($i=0;$i<4;$i++){
                    echo '<div class="col-md-2 page_Display">';
                    if(isset($movie['castMember'][$i]['picture'])){ 
                   
                        echo '<img src="'.$movie['castMember'][$i]['picture']['href'].'" />';
                   }
                    if(isset($movie['castMember'][$i]['person']) ){
                        echo ''.$movie['castMember'][$i]['person']['name'].'<br/>';
                        echo ''.$movie['castMember'][$i]['activity']['$'].'<br/>'; 
                    }
                    if(isset($movie['castMember'][$i]['role'])){
                        echo ''.$movie['castMember'][$i]['role'].'';
                    }
                    echo "</div>";     
            };
        ?> 
    </div>  
<?php  require_once __DIR__."/View/footer.php"; ?>

        
    


    

                    
