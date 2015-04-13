<html>
 <head>
    <meta charset="UTF-8">
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.3.0/css/material-fullpalette.min.css">
     <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
     
<link rel="stylesheet" href="./webroot/css/MycakeMovies.css">
 </head>
<body>
   <div id="MycakeMovies">
   <div class="load"><i class="fa fa-cog fa-spin fa-5x"></i></div>
    <div class="navbar navbar-default">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="index.php?filter=nowshowing">My Cake Movie</a>
  </div>
  <div class="navbar-collapse collapse navbar-responsive-collapse">
    <ul class="nav navbar-nav">
      <li><a href="index.php?filter=nowshowing">Accueil</a></li>
      <li><a href="cinema.php?filter=comingsoon">Cinéma</a></li>
    </ul>
    <form class="navbar-form navbar-left" method="post" action="Search.php" id="mySearch">
      <input type="text" class="form-control col-lg-8" placeholder="Rechercher..." name="q" id="q">
      <button class="btn btn-primary" id="btn-nav-submit" type="submit" value="searchMovie" name="submit">GO !</button>
    </form>
    <ul class="nav navbar-nav navbar-right">
       <li class="dropdown">
        <a href="javascript:void(0)" data-target="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
        <ul class="dropdown-menu">
          <li><a href="javascript:void(0)">Action</a></li>
          <li><a href="javascript:void(0)">Another action</a></li>
          <li><a href="javascript:void(0)">Something else here</a></li>
          <li class="divider"></li>
          <li class="dropdown-header">Dropdown header</li>
          <li><a href="javascript:void(0)">Separated link</a></li>
          <li><a href="javascript:void(0)">One more separated link</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>