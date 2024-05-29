const pool = require('../database/config');
const { v4: uuid } = require('uuid');

const selectAll = async () => {
    try {
        const { rows } = await pool.query('SELECT * FROM ventas');
        return rows;
    } catch (error) {
        console.error('No se pudo buscar las ventas', error);
    }
}

const selectByDate = async (fecha) => {
    try {
        const { rows } = await pool.query("SELECT ventas.venta_id,ventas.venta_date,ventas.producto_cantidad_vendida, ventas.precio_venta, productos.producto_id, productos.producto_nombre, productos.producto_precio FROM ventas JOIN productos ON productos.producto_id=ventas.producto_id WHERE ventas.venta_date = $1", [fecha]);
        return rows;
    } catch (error) {
        console.error('No se encontro ninguna venta', error)
    }
}

const selectOne = async (id) => {
    try {
        const { rows } = await pool.query('SELECT * FROM ventas WHERE venta_id=$1', [id]);
        return rows;
    } catch (error) {
        console.error('Error al buscar la venta', error);
    }
}

const insertVenta = async (newVenta) => {
    let venta = {
        ...newVenta,
        id: uuid()
    }
    try {
        let query = "INSERT INTO ventas(venta_id,venta_date,producto_id, producto_cantidad_vendida, precio_venta) VALUES($1,$2,$3,$4,$5) RETURNING *";
        let values = [venta.id, venta.fecha, venta.producto, venta.cantidad, venta.precio];
        const { rows } = await pool.query(query, values);
        return { success: true, message: 'venta insertada correctamente' }
    } catch (error) {
        console.error('No se pudo insertar la venta', error);
    }

}

module.exports = {
    selectAll,
    selectByDate,
    selectOne,
    insertVenta
}