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

module.exports = {
    selectAll,
    insertProducto
}