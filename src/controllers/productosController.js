const service = require('../services/productoService')

const selectAllProducts = async (req, res) => {
    const result = await service.selectAll();
    res.status(200).json(result)
}

const selectOneProduct = (req, res) => {
    return;
}

const insertProduct = async (req, res) => {
    const { body } = req;
    console.log('body', body);
    let producto = {
        nombre: body.nombre,
        precio: body.precio,
        cantidad: body.cantidad
    }
    const result = await service.insertProducto(producto);
    res.status(200).json(result);
}

const updateProduct = (req, res) => {
    return;
}
const deleteProduct = (req, res) => {
    return;
}

module.exports = {
    selectAllProducts,
    selectOneProduct,
    insertProduct,
    updateProduct,
    deleteProduct
}