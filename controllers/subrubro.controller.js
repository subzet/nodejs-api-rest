const SubRubro =  require('../models/subrubro.model');
const Rubro = require('../models/rubro.model');

exports.subrubro_create = function(req,res){
    
    const rubro = Rubro.findById(req.params.rubroId).exec().then(function(response){
        return response;
    });

    console.log(rubro);

    let subrubro = new SubRubro(
        {
            description : req.body.description,
            rubro: rubro._id
        }
    );


    
    subrubro.save(
        function(err) {
            if (err) return next(err);
            res.send({result: {id : subrubro.id},
                      clientMessage: 'SubRubro created!'})
        }
    );
}

