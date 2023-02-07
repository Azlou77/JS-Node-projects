<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$host = "localhost";
$db_name = "isphers";
$username = "root";
$password = "";
try{
    $db = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
    $db->exec("set names utf8");
}catch(PDOException $exception){
    echo "Erreur de connexion : " . $exception->getMessage();
}

$sql = "SELECT * FROM companies";

$query = $db->prepare($sql);


$query->execute();

while($row = $query->fetch(PDO::FETCH_ASSOC)){
    extract($row);

    $comp = [
        "id" => $id,
        "nom" => $nom,
        "lat" => $lat,
        "lon" => $lon,
    ];

    $tableauCompanies['companies'][] = $comp;   
}

echo json_encode($tableauCompanies);