<?php
session_start();

try{
    $bdd = new PDO('mysql:host=localhost;dbname=projet9;charset=utf8','root','');
}catch(Exception $e){
    die('Erreur : '.$e->getMessage());
}

if (isset($_POST['submit'])) {
    $email= $_POST['user_mail'];
    $password= $_POST['password'];
    $name= $_POST['user_name'];

    $reponse = $bdd->query("INSERT INTO user (username, usermail, password) VALUES ('$name', '$email', '$password')");
    header("location: users.php");
}


/*$reponse = $bdd->query("SELECT * FROM users WHERE user_mail='$email' AND password='$password'");*/

?>