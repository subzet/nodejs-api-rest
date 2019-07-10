//Modelo de Rubros.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RubroSchema = {
    description : {type: String, required: true, max: 100}
}
//Export the schema.
module.exports = mongoose.model('Rubro', RubroSchema);
