const express = require('express');
const router = express.Router();
const campeonatoController = require('../controllers/campeonatoController');

router.get('/', campeonatoController.getAll);
router.get('/:id', campeonatoController.getOne);
router.post('/', campeonatoController.create);
router.put('/:id', campeonatoController.update);
router.delete('/:id', campeonatoController.delete);

module.exports = router;

