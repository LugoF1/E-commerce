<?php
    $connection = mysqli_connect('localhost', 'root', 'mysql', 'Ecommerce');

    if (!$connection) {
        die("Conexión fallida: " . mysqli_connect_error());
    }
?>