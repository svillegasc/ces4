var {Router, Route} = require('./router');
var mongo = require('mongodb');
const db = require('monk')('localhost:27017/restaurante')
const products = db.get('products')


class ContactRouter extends Router {
    get routes() {
        return {
            '/:Products': [
                new Route("get", "index"),
            ]
        };
    }

    index(req, res) {
      //  var listproducts = products.index();
      console.log(products.find());
        products.find({},function(e,result){
           res.json(result); 
        });
    }
};

exports.ContactRouter = ContactRouter;
