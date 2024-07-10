<?php
require '../config/connection.php';
$id = $_GET['id'];
$id = filter_var($id, FILTER_VALIDATE_INT);

if(!$id){
    header('Location: /Ecommerce/index.html');
  }
  
if ($connection) { 
    // Sanitizar el valor del parámetro 'id' para evitar inyección SQL

    $consultaProducto = "SELECT * FROM productos WHERE id = $id";
    $obtenerProducto = mysqli_query($connection, $consultaProducto);

    if ($obtenerProducto) {
        $productos = array();

        while ($producto = mysqli_fetch_assoc($obtenerProducto)) {
            $productos[] = array(
                "id" => $producto['id'],
                "nombre" => $producto['nombre'],
                "imagen" => $producto['imagen'],
                "categoria" => $producto['categoria'],
                "marca" => $producto['marca'],
                "modelo" => $producto['modelo'],
                "precio" => $producto['precio'],
                "stock" => $producto['stock'],
                "descripcion_corta" => $producto['descripcion_corta'],
                "descripcion_larga" => $producto['descripcion_larga']
            );
        }

        // Cerrar la conexión
        mysqli_close($connection);

        // Establecer el encabezado de contenido como JSON
        header('Content-Type: application/json');

        // Devolver los datos como JSON
        echo json_encode($productos);
    }

}
else {
    // Manejo de error en caso de que la conexión falle
    echo json_encode(array('error' => 'No se pudo establecer la conexión con la base de datos'));
}
?>