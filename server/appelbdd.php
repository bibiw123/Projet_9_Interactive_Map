<?php 
try{
	$bdd = new PDO('mysql:host=localhost;dbname=projet9;charset=utf8','root','');
	//echo 'connexion OK';
}catch(Exception $e){
	die('Erreur : '.$e->getMessage());
}


?>