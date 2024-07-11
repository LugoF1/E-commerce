<?php
require '../config/connection.php';
$cat = $_GET['cat'];
if ($connection) {
    $consultaProductos = "SELECT id, nombre, imagen, descripcion_corta FROM productos WHERE categoria = '$cat'";
    $obtenerProductos = mysqli_query($connection, $consultaProductos);

    if ($obtenerProductos) {
        $productos = array();

        while ($producto = mysqli_fetch_assoc($obtenerProductos)) {
            $productos[] = array(
                "id" => $producto['id'],
                "nombre" => $producto['nombre'],
                "imagen" => $producto['imagen'],
                "descripcion_corta" => $producto['descripcion_corta']
            );
        }

        // Cerrar la conexión
        mysqli_close($connection);

        // Establecer el encabezado de contenido como JSON
        header('Content-Type: application/json');

        // Devolver los datos como JSON
        echo json_encode($productos);
    } else {
        // Manejo de error en la consulta
        echo json_encode(array('error' => 'Error en la consulta a la base de datos'));
    }
} else {
    // Manejo de error en caso de que la conexión falle
    echo json_encode(array('error' => 'No se pudo establecer la conexión con la base de datos'));
}
?>

