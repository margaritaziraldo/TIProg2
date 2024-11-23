// para dsp fijarse q funcione
// const db = require('../database/models');
// const Product = db.Product;

const indexController = {
    index: function(req, res) {
        /*let arrayProductos = [];

        Product.findAll({

        })
            .then(function(res) {
                if (res) {
                    arrayProductos = res;
                }
            })
            .catch(function(err) {
                console.log(err)
            })

        res.render('index', { productos: arrayProductos });*/
        res.render('index');
    },
    add: function(req, res) {
        // si el user esta logueado se renderiza la vista, sino lo mando a login
        res.render('product-add', { error : "" })
    },
    formAdd: function(req, res) {
        let body = req.body;

        let titulo = body.titulo;
        let descripcion = body.descripcion;
        // faltan ...
        
        // validamos q los campos no estén vacíos
        if (!titulo || !descripcion) {
            // para probar
            console.log("No puede dejar vacíos los campos")

            return res.render('product-add', {error: "No puede dejar vacíos los campos"})
        } else {
            // mandar a la base de datos la información del producto
            Product.create({
                titulo: titulo,
                descripcion: descripcion,
            })
                .then(function(res) {
                    return res.redirect("/");
                })
                .catch(function(err) {
                    // para probar de nuevo
                    console.log(err)
                    return res.render('product-add', {error: "Hubo error"})
                })
        }
    }
    // todo el codigo de productos aca, findOne(), findByPk()...

    // relacionarlo entre tablas


}

module.exports = indexController;