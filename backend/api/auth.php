<?php
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../classes/User.php';

$database = new Database();
$db = $database->getConnection();

$user = new User($db);

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($data->action)) {
    if ($data->action === 'register') {
        $user->username = $data->username;
        $user->email = $data->email;
        $user->password = $data->password;

        if ($user->register()) {
            echo json_encode(["message" => "User registered successfully."]);
        } else {
            echo json_encode(["message" => "Unable to register user."]);
        }
    } elseif ($data->action === 'login') {
        $user->email = $data->email;
        $user->password = $data->password;

        if ($user->login()) {
            echo json_encode(["message" => "Login successful.", "user_id" => $user->id]);
        } else {
            echo json_encode(["message" => "Login failed."]);
        }
    }
} else {
    echo json_encode(["message" => "Invalid request."]);
}
