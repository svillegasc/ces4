var {Router, Route} = require('./router');
var mongo = require('mongodb');
const db = require('monk')('localhost:27017/restaurante')
const products = db.get('products')


class ContactRouter extends Router {
    // Services Products
    get routes() {
        return {
            '/:Products': [
                new Route("get", "index"),
                new Route("post", "indexPost"),
                new Route("update", "indexUpd"),
                new Route("delete", "indexDel"),
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

    indexPost(req, res) {
        var person = req.body;
        console.log(person);
        res.send(`Código: ${person.codigo} 
                  Nombre: ${person.nombre}
                  Valor: ${person.valor}
                  Descripcion: ${person.descripcion}`);
    }

    indexUpd(req, res) {
        var person = req.body;
        console.log(person);
        res.send(`Código: ${person.codigo} 
                  Nombre: ${person.nombre}
                  Valor: ${person.valor}
                  Descripcion: ${person.descripcion}`);
    }

    indexDel(req, res) {
        var person = req.body;
        console.log(person);
        res.send(`Código: ${person.codigo}`);
    }

    // Services Pedidos
    get routes() {
        return {
            '/:Pedidos': [
                new Route("get", "index"),
                new Route("post", "indexPost"),
                new Route("update", "indexUpd"),
                new Route("delete", "indexDel"),
            ]
        };
    }

    index(req, res) {
      //  var listproducts = products.index();
      console.log(bonito.find());
        bonito.find({},function(e,result){
           res.json(result); 
        });
    }

    indexPost(req, res) {
        var person = req.body;
        console.log(person);
        res.send(`Código Pedido: ${person.codigoPedido} 
                  Nombre: ${person.nombre}
                  Dirección: ${person.direccion}
                  Teléfono: ${person.telefono}`);
    }

    indexUpd(req, res) {
        var person = req.body;
        console.log(person);
        res.send(`Código Pedido: ${person.codigoPedido} 
                  Nombre: ${person.nombre}
                  Dirección: ${person.direccion}
                  Teléfono: ${person.telefono}`);
    }

    indexDel(req, res) {
        var person = req.body;
        console.log(person);
        res.send(`Código Pedido: ${person.codigoPedido}`);
    }
};

exports.ContactRouter = ContactRouter;
