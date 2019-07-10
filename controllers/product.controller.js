const Product = require('../models/product.model');

exports.product_create = function (req, res) {
    
    let product = new Product(
            {
                name: req.body.name,
                brand: req.body.brand,
                barCode: req.body.barCode,
                price: req.body.price
            }
        );
    
    product.save(
        function (err) {  
            if (err) {
                return next(err);
            }
            res.send({result: {id : product.id},
                      clientMessage: 'Product created!'})
        })
    };

exports.product_details = function(req,res){
    Product.findById(req.params.id, function(err,product){
        if (err) return next(err);
        res.send(product);
    })
}

exports.product_update = function(req,res){
    Product.findByIdAndUpdate(req.params.id,{$set: req.body}, function(err,product){
        if(err) return next(err);
        res.send("Product updated!")
    })
}

exports.product_delete = function(req,res){
    Product.findByIdAndDelete(req.params.id,function(err){
        if(err) return next(err);
        res.send("Product deleted!");
    })
}