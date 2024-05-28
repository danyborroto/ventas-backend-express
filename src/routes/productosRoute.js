const { Router } = require('express');
const router = Router();
const { selectAllProducts,
    selectOneProduct,
    insertProduct,
    updateProduct,
    deleteProduct } = require('../controllers/productosController');


router.get('/', selectAllProducts);
router.get('/:id', selectOneProduct);
router.post('/', insertProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;