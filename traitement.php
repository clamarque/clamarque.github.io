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
  if(empty($prenom)){
    $valid=false;
    $erreurprenom="Prenom obligatoire";
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
$prenom = stripslashes($prenom);
if(mail($to,$subject,$message,$header)){
$erreur = "Votre message nous est bien parvenu";
unset($nom);
unset($prenom);
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