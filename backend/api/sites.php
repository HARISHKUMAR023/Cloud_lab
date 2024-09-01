<?php
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../classes/Site.php';

$database = new Database();
$db = $database->getConnection();

$site = new Site($db);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $site->user_id = isset($_GET['user_id']) ? $_GET['user_id'] : die();

    $stmt = $site->getSitesByUser();
    $num = $stmt->rowCount();

    if ($num > 0) {
        $sites_arr = [];

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $site_item = [
                "id" => $id,
                "site_name" => $site_name,
                "url" => $url,
                "created_at" => $created_at
            ];

            array_push($sites_arr, $site_item);
        }

        echo json_encode($sites_arr);
    } else {
        echo json_encode(["message" => "No sites found."]);
    }
} else {
    echo json_encode(["message" => "Invalid request."]);
}
