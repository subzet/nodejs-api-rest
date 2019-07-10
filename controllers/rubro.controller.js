const Rubro =  require('../models/rubro.model');

exports.rubro_create = function(req,res){
    let rubro = new Rubro(
        {
            description : req.body.description
        }
    );

    rubro.save(
        function(err) {
            if (err) return next(err);
            res.send({result: {id : rubro.id},
                      clientMessage: 'Rubro created!'})
        }
    );
}

exports.rubro_details = function(req,res){
    Rubro.findById(req.params.id,function(err,rubro){
        if(err) return next(err);
        res.send(rubro);
    });
}

exports.rubro_delete = function(req, res){
    Rubro.findByIdAndDelete(req.params.id,function(err){
        if(err) return next(err);
        res.send("Rubro deleted!")
    })
}