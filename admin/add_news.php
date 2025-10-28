<?php
include("../config.php");

if(isset($_POST['title'])){
    $title = $_POST['title'];
    $content = $_POST['content'];

    $imageName = $_FILES['image']['name'];
    $target = "upload/" . basename($imageName);
    move_uploaded_file($_FILES['image']['tmp_name'], $target);

    $sql = "INSERT INTO news (title, content, image) VALUES ('$title', '$content', '$target')";
    mysqli_query($conn, $sql);

    header("Location: dashboard.php?msg=خبر مضاف بنجاح");
}
?>
