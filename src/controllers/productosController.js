const service = require('../services/productoService')

const selectAllProducts = async (req, res) => {
    const result = await service.selectAll();
    res.status(200).json(result)
}

const selectOneProduct = async (req, res) => {
    const { id } = req.params;
    const result = await service.selectOne(id);
    res.status(200).json(result);
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

const updateProduct = async (req, res) => {
    const { body } = req;
    let { id } = req.params;
    let producto = {
        nombre: body.nombre,
        precio: body.precio,
        cantidad: body.cantidad
    }
    const result = await service.updateProducto(id, producto);
    res.status(200).json(result);
}
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const result = await service.deleteProducto(id);
    res.status(200).json(result);
}

module.exports = {
    selectAllProducts,
    selectOneProduct,
    insertProduct,
    updateProduct,
    deleteProduct
}