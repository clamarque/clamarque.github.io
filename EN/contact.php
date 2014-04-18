<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Parenthèse Champêtre</title>
    <link href="../bootstrap/bootstrap.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Miniver' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Averia+Gruesa+Libre' rel='stylesheet' type='text/css'>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="row header">
      <div class="col-lg-1">
       <img src="../img/logo/logo-off.png" alt="logo" width="193" />
      </div>
      <div class="col-lg-8">
        <div class="navbar navbar-default" role="navigation">
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
              <li><a href="index.html">Home</a></li>
              <li><a href="gite.html">Accommodations</a></li>
              <li><a href="balneo.html">Balneotherapy</a></li>
              <li><a href="tarifs.html">Rates</a></li>
              <li class="active"><a href="contact.php">Contact</a></li>
              <li><a href="liens.html">Useful links</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div><!-- menu col -->
    </div> <!-- row-->
   	<section id="contact">

        <h1>Information<span><br>Contact us and find us</span></h1>
      <table class="table-responsive">
        <tbody>
            <tr>
              <td>
                          
                   <form role="form" method="post" action="traitement.php">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address :</label>
                <input type="email" class="form-control" id="email" name="email" value="" placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Name :</label>
                <input type="text" class="form-control" id="nom" name="nom"  value="" placeholder="Nom">

              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">First name :</label>
                <input type="text" class="form-control" id="prenom" name="prenom" value=""placeholder="Prenom">
              </div>
              <textarea class="form-control" rows="3" id="message" name="message"></textarea>

              <button type="submit" class="btn btn-default">Send</button>
            </form>

              </td>
              <td>Isabelle et jean-Pierre DANET <br>  
                  4 rue du Moulin <br>
                  59940 Neuf-Berquin, France
                  <br><br>
                  
                  <img src="../img/logo/clevacances.png" alt="CleVacances" width="50" />To book or check availability of our cottage on the official website of Gites de France ...<br>
                <!--<a href="http://www.gites-de-france.com/">Le gîte référence Numéro:?</a>
                  -->
              </td>
                  <td>Phone: +(33) 3 28 40 43 70 <br>
                    Mobile phone: +(33) 6 84 58 59 84  <br>
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

            <p>Neuf-Berquin is near: </p>
            <ul>
              <li>Lille (40 km)</li>
              <li>Lens (35 km)</li>
              <li>Paris (240 km)</li>
              <li>Cassel (23km)</li>
              <li>Ypres (30km)</li>
              <li>Bruges (120km)</li>
            </ul>

          </div></td>

             
            </tr>
        </tbody>
      </table>
   	</section>
    <footer>
        <div class="col-md-2">
         <img src="../img/logo/chequevacances.png" alt="cheque-vacances" width="50" height="50" />
         <img  src="../img/logo/clevacances.png" alt="cle-vacances" width="100" />
        </div>
        <div class="col-md-offset-1 col-md-5">
          <p>Copyright "Parenthèse champêtre" 2014 - Gite et espace balneotherapie</p>
        </div>
        <div class="col-md-4">
          <p>website developed by: <a href="http://camilledewavrin.github.io/" target="about_blanck">Camille D</a> | <a href="http://charleslamarque.com/" target="about_blanck">Charles L</a>
          </p>
        </div>  
    </footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
   </body>
</html>