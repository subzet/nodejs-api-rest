const express = require('express');
const router = express.Router();


const subrubro_controller = require('../controllers/subrubro.controller');

router.post('/create', subrubro_controller.subrubro_create);

module.exports = router;