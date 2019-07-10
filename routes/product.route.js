/**Some developers prefer to have all the routes in a single file (routes.js)
for example but this is not helpful when your app grows! so let’s structure it 
the right way from the beginning. */
const express = require('express');
const router = express.Router();

//Require the controller
const product_controller = require('../controllers/product.controller');

router.post('/create', product_controller.product_create);

router.get('/:id', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete); 

module.exports = router;