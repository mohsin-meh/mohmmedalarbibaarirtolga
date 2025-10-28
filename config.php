<?php
$host = "db30730.databaseasp.net";      
$user = "db30730";           
$pass = "B=f6j2-HGw3#";              
$db   = "db30730.databaseasp.net";      
$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("فشل الاتصال بقاعدة البيانات: " . mysqli_connect_error());
}
?>
