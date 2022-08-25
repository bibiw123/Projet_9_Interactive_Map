<?php

if($_POST != null){
  $email = $_POST['usermail'];
  $pwd = $_POST['password'];
//   $reponse = $bdd->query("SELECT  FROM `user` WHERE `email` = '$mail' AND `password` = '$pwd'");
     if ($reponse === $_POST['usermail'] && $_POST['password']){
        $base = ("SELECT * FROM `user` WHERE `email` = '$mail' AND `password`= '$pwd'");
        // echo "authentification reussie"
        // $historique[]
        }else{
        echo"authentification a echouée";
        }
        echo "bonjour";
        header("location: ../interactive map/starred.html");
 }



// page identification
// ici on va avoir 2 input avec le mail et le mot de passe
// via un formulaire de connexion
//  1 er etape lié la base de donnée
//  2eme etape crééer le formulaire
//  3 eme etape verifier si l'utilisateur existe
//  4 etape si l'utilisateur existe le renvoyer vers la page administrateur
//  ou sinon renvoyer message d'erreur


$_SESSION['authentification'] = "OK";
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@200;300&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
  </head>

  <body class="conn">
  <!-- Header added automatically by JS -->
  <header></header>
    <main>
        <div id="form_conn" >
        <form action="connection.php" method="post">
            <h2>Merci de vous connecter</h2>
            <input type="email" name="usermail" placeholder="Votre email">
            <input type="password" name="password" id="pass"placeholder="votre mot de passe">
            <input type="submit" value="envoyer">
        </form>
        </div>
    </main>
  </body>
</html>