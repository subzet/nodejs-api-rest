//Modelo de productos.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let SubRubroSchema = {
    description : {type: String, required: true, max: 100},
    rubro: {type: mongoose.Schema.Types.ObjectId, ref: 'Rubro'} //Reference to Rubro object.
}
//Export the schema.
module.exports = mongoose.model('SubRubro', SubRubroSchema);
