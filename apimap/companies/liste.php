<?php
// Headers requis
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


// On vérifie que la méthode utilisée est correcte
if($_SERVER['REQUEST_METHOD'] == 'GET'){
    // On inclut les fichiers de configuration et d'accès aux données
    include_once './config/Database.php';
    include_once './models/Companies.php';

    // On instancie la base de données
    $database = new Database();
    $db = $database->getConnection();

    // On instancie les agences
    $company = new Companies($db);

    // On récupère les données
    $stmt = $company->lire();

    // On vérifie si on a au moins 1 agence
 if ($stmt->rowCount() > 0) {
        // On initialise un tableau associatif
        $tableauCompanies = [];
        $tableauCompanies['companies'] = [];

        // On parcourt les agences
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);

            $comp = [
                "id" => $id,
                "nom" => $nom,
                "lat" => $lat,
                "lon" => $lon,
            ];

            $tableauCompanies['companies'][] = $comp;
        }

        // On envoie le code réponse 200 OK
        http_response_code(200);

        // On encode en json et on envoie
        echo json_encode($tableauCompanies);
    }

}else{
    // On gère l'erreur
    http_response_code(405);
    echo json_encode(["message" => "La méthode n'est pas autorisée"]);
}
