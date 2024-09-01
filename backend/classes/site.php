<?php
class Site {
    private $conn;
    private $table_name = "sites";

    public $id;
    public $user_id;
    public $site_name;
    public $url;
    public $created_at;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function uploadSite() {
        $query = "INSERT INTO " . $this->table_name . " SET user_id=:user_id, site_name=:site_name, url=:url";

        $stmt = $this->conn->prepare($query);

        $this->site_name = htmlspecialchars(strip_tags($this->site_name));
        $this->url = htmlspecialchars(strip_tags($this->url));

        $stmt->bindParam(":user_id", $this->user_id);
        $stmt->bindParam(":site_name", $this->site_name);
        $stmt->bindParam(":url", $this->url);

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    public function getSitesByUser() {
        $query = "SELECT id, site_name, url, created_at FROM " . $this->table_name . " WHERE user_id = :user_id";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":user_id", $this->user_id);
        $stmt->execute();

        return $stmt;
    }
}
