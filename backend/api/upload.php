<?php
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../classes/site.php';

$database = new Database();
$db = $database->getConnection();

$site = new Site($db);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $site->user_id = $_POST['user_id'];
    $site->site_name = $_POST['siteName'];

    $upload_dir = '../backend/uploads/' . $site->user_id . '/' . $site->site_name . '/';
    if (!is_dir($upload_dir)) {
        mkdir($upload_dir, 0777, true);
    }

    foreach ($_FILES['files']['name'] as $key => $filename) {
        $file_tmp = $_FILES['files']['tmp_name'][$key];
        move_uploaded_file($file_tmp, $upload_dir . $filename);
    }

    $site->url = $upload_dir;

    if ($site->uploadSite()) {
        echo json_encode(["message" => "Site uploaded successfully."]);
    } else {
        echo json_encode(["message" => "Unable to upload site."]);
    }
} else {
    echo json_encode(["message" => "Invalid request."]);
}
