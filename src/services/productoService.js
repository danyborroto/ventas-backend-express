const pool = require('../database/config');
const { v4: uuid } = require('uuid');

const selectAll = async () => {
    try {
        const { rows } = await pool.query('SELECT * FROM productos');
        return rows;
    } catch (error) {
        console.error('No se pudo buscar productos', error)
    }
}

const selectOne = async (id) => {
    try {
        const { rows } = await pool.query('SELECT * FROM productos WHERE producto_id=$1', [id]);
        return rows;

    } catch (error) {
        console.error('No se pudo seleccionar el producto', error);
    }
}

const insertProducto = async (newProducto) => {
    let producto = {
        ...newProducto,
        id: uuid()
    }
    try {
        const { rows } = await pool.query('INSERT INTO productos (producto_id,producto_nombre,producto_precio,producto_cantidad) VALUES($1,$2,$3,$4) RETURNING *', [producto.id, producto.nombre, producto.precio, producto.cantidad]);
        return { success: true, message: 'Producto insertado correctamente' };
    } catch (error) {
        console.error('Error al insertar', error);
    }
}

const updateProducto = async (id, newProducto) => {
    producto = {
        ...newProducto,
        id: id
    }
    try {
        let query = "UPDATE productos SET producto_nombre=$2, producto_precio=$3, producto_cantidad=$4 WHERE producto_id=$1";
        let values = [producto.id, producto.nombre, producto.precio, producto.cantidad];
        const { rows } = await pool.query(query, values);
        return { success: true, message: 'Producto actualizado correctamente' }

    } catch (error) {
        console.error('No se pudo actualizar el producto', error);
    }
}

const deleteProducto = async (id) => {
    try {
        const { rows } = await pool.query('DELETE FROM productos WHERE producto_id=$1', [id]);
        return { success: true, message: 'Eliminado correctamente' };
    } catch (error) {
        console.error('No se pudo eliminar el producto', error);
    }
}

module.exports = {
    selectAll,
    selectOne,
    insertProducto,
    updateProducto,
    deleteProducto
}