<?php
session_start();
include("../config.php");

if(isset($_POST['username'])){
    $user = $_POST['username'];
    $pass = md5($_POST['password']);

    $sql = "SELECT * FROM admins WHERE username='$user' AND password='$pass'";
    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) > 0){
        $_SESSION['admin'] = $user;
        header("Location: dashboard.php");
    } else {
        $error = "❌ اسم المستخدم أو كلمة السر غير صحيحة";
    }
}
?>
