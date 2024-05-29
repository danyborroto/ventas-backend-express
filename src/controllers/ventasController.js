const services = require('../services/ventasService');

const selectAll = async (req, res) => {
    const { fecha } = req.query
    if (fecha) {
        const result = await services.selectByDate(fecha);
        res.status(200).json(result);
    } else {
        const result = await services.selectAll();
        res.status(200).json(result);
    }
}

const selectOne = async (req, res) => {
    const { id } = req.params;
    const result = await services.selectOne(id);
    res.status(200).json(result);
}

const insertVenta = async (req, res) => {
    const { body } = req;
    const venta = {
        fecha: body.fecha,
        producto: body.producto,
        cantidad: body.cantidad,
        precio: body.precio
    }
    const result = await services.insertVenta(venta);
    res.status(200).json(result);
}
const updateVenta = (req, res) => {
    return
}
const deleteVenta = (req, res) => {
    return
}

module.exports = {
    selectAll,
    selectOne,
    insertVenta,
    updateVenta,
    deleteVenta
}