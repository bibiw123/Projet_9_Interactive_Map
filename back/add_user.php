<?php
session_start();
include ('appelBdd.php');

if (isset($_POST['submit'])) {
    $email= $_POST['usermail'];
    $password= $_POST['password'];
    $name= $_POST['username'];

    $reponse = $bdd->query("INSERT INTO user (username, usermail, password) VALUES ('$name', '$email', '$password')");
    header("location: ../interactive map/starred.html");
}


/*$reponse = $bdd->query("SELECT * FROM users WHERE user_mail='$email' AND password='$password'");*/

?>