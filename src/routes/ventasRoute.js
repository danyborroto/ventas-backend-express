const { Router } = require('express');
const router = Router()
const { selectAll, selectOne, insertVenta, updateVenta, deleteVenta } = require('../controllers/ventasController');

router.get('/', selectAll);
router.get('/:id', selectOne);
router.post('/', insertVenta);
router.put('/:id', updateVenta);
router.delete('/:id', deleteVenta);

module.exports = router;