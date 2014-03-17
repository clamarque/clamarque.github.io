<?php
if(!empty($_POST)) {
  extract($_POST);
  $valid = true;
  if(empty($nom)){
    $valid=false;
    $erreurnom="Nom obligatoire";
  }
  if(!preg_match("/^[a-z0-9\-_.]+@[a-z0-9\-_.]+\.[a-z]{2,3}$/i",$email))
   {
    $valid=false;
    $erreurmail ="votre mail n'est pas valide";
   }
  if(empty($email)){
    $valid=false;
    $erreurmail="mail obligatoire";
  }

if(empty($message)){
    $valid=false;
    $erreurmessage="message obligatoire";
  }
  if($valid){
    
$to = "chabox@hotmail.fr";
$subject = $nom." a contact le site";
$header= "From: $nom <$email>";
$message = stripslashes($message);
$nom = stripslashes($nom);
if(mail($to,$subject,$message,$header)){
$erreur = "Votre message nous ai bien parvenu";
unset($nom);
unset($email);
unset($message);
}
else{
$erreur = "Une erreur est survenue";
}
/*
echo "message envoyé !!";*/
  }

}
?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Parenthèse Champêtre</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="engine1/style.css" />
    <link href='http://fonts.googleapis.com/css?family=Miniver|Averia+Gruesa+Libre' rel='stylesheet' type='text/css'>
    <script type="text/javascript" src="engine1/jquery.js"></script>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
      <div class="navbar navbar-default" role="navigation">
       <img src="img/logo.png" alt="logo" />
       <blockquote><span>(</span>Un retour  <span class="miniver">aux sources</span></blockquote>
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a href="index.html">Accueil</a></li>
            <li><a href="gite.html">Gîte</a></li>
            <li><a href="balneo.html">Balnéothérapie</a></li>
            <li><a href="tarifs.html">Tarifs</a></li>
            <li class="active"><a href="contact.html">Contact</a></li>
            <li><a href="liens.html">Liens utiles</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>

   	<section id="contact">

        <h1>Informations <span><br/>Pour nous contacter et nous trouver</span></h1>
      <table class="table-responsive">
        <tbody>
            <tr>
              <td>
              <?php if(isset($erreur)) { echo $erreur;} ?>
                   <form role="form" method="post" action="contact.php">
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control" id="email" name="email" value="<?php if(isset($email)) echo $email; ?>" placeholder="Enter email">
                <span id="error-message">
                    <?php if (isset($erreurmail)) echo $erreurmail; ?>
                </span>
              </div>
              <div class="form-group">
                <label for="nom">Nom</label>
                <input type="text" class="form-control" id="nom" name="nom"  value="<?php if(isset($nom)) echo $nom; ?>" placeholder="Nom">
                <span id="error-message"><?php if(isset($erreurnom)) echo $erreurnom; ?></span>

              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Prenom</label>
                <input type="text" class="form-control" id="prenom" name="prenom" value=""placeholder="Prenom">
              </div>
              <textarea class="form-control" rows="3" id="message" name="message"><?php if(isset($message)) echo $message; ?></textarea>
              <span id="error-message"><?php if (isset($erreurmessage)) echo $erreurmessage; ?></span>


              <button type="submit" class="btn btn-default" value="Envoyer">Envoyer</button>
            </form>

              </td>
              <td>Isabelle et Jean-Pierre DANET <br>  
                  4 rue du Moulin <br>
                  59940 Neuf-Berquin, France
                  <br><br>
                  <img src="img/logo_gitesDeFrance.gif" alt="GiteDeFrance" width="50" /> Pour réserver ou vérifier les disponibilités de notre gite sur le site officiel des gîtes de france...<br>
                  <a href="http://www.gites-de-france.com/">Le gîte référence Numéro:?</a>
              </td>
                  <td>Téléphone: +(33) 3 28 40 43 70 <br>
                    Portable: +(33) 6 84 58 59 84  <br>
                    contact@parenthesechampetre.fr
               </td>

            </tr>

            <tr>
            <td>
            <div id="contentContact">
           <div id="leftPlan">
              <iframe width="420" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.fr/maps?f=q&amp;source=s_q&amp;hl=fr&amp;geocode=&amp;q=4+Rue+du+Moulin,+Neuf-Berquin&amp;aq=0&amp;oq=4+ru&amp;sll=50.662155,2.653822&amp;sspn=0.000501,0.001321&amp;t=h&amp;g=4+Rue+du+Moulin,+Neuf-Berquin&amp;ie=UTF8&amp;hq=&amp;hnear=4+Rue+du+Moulin,+59660+Neuf-Berquin,+Nord,+Nord-Pas-de-Calais&amp;ll=50.66214,2.654013&amp;spn=1.020658,2.705383&amp;z=9&amp;output=embed"></iframe>
          </div>
          </div>
          </td>
             <td><div id="rightCoord">
            <p>Coordonées GPS :</p>
            <p>N50° 39.7284', E002° 39.2408'</p>

            <p>Neuf-Berquin est à : </p>
            <ul>
              <li> 40km de Lille</li>
              <li> 35km de Lens</li>
              <li> 240km de Paris</li>
              <li> 23km de Cassel</li>
              <li> 30km de Ypres</li>
              <li> 120km de Bruges</li>
            </ul>

          </div></td>

             
            </tr>
        </tbody>
      </table>
   	</section>
    <footer>
        <div class="footerLogo">
          <img src="img/chequevacances.png" alt="cheque-vacances" width="50" height="50" />
          <img src="img/clevacances.png" alt="cle-vacances" width="100" />
        </div>
        <p class="footerp">website developed by: <a href="http://camilledewavrin.github.io/" target="about_blanck">Camille D</a> | <a href="http://charleslamarque.com/" target="about_blanck">Charles L</a></p>

        <p>Copyright "Parenthèse champètre" 2014 - Gite et espace balneotherapie</p>
    </footer>

        <script type="text/javascript" src="engine1/wowslider.js"></script>
        <script type="text/javascript" src="engine1/script.js"></script>
        <script src="js/bootstrap.min.js"></script>

   </body>
</html>