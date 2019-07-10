//Modelo de productos.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = {
    name: {type: String, required: true, max: 100},
    brand: {type: String, required: true, max: 100},
    barCode: {type: String, required: true, max: 13},
    price: {type: Number, required: true}
}
//Export the schema.
module.exports = mongoose.model('Product', ProductSchema);
