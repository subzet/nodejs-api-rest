const express = require('express');
const router = express.Router();

const rubro_controller = require('../controllers/rubro.controller');

router.post('/create', rubro_controller.rubro_create);

router.get('/:id', rubro_controller.rubro_details);

router.delete('/:id/delete', rubro_controller.rubro_delete);

module.exports = router;