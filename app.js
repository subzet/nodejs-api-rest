const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Importamos las rutas.    
const product = require('./routes/product.route');
const rubro = require('./routes/rubro.route');
const subrubro = require('./routes/subrubro.route');

// Set up mongoose connection
const mongoose = require('mongoose');
//let dev_db_url = 'mongodb+srv://appuser:appuser1@cluster0-jdb9k.mongodb.net/test?retryWrites=true&w=majority';
let dev_db_url = 'mongodb://localhost:27017/app'
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 
false}));

let port = 3000;

app.listen(port, () => {
    console.log("Server initialized at port" + port)
})


app.use('/products', product);

app.use('/rubros',rubro);

app.use('/subrubros',subrubro);

app.get('/', function (req, res){
    res.send('Express says hi!')
})