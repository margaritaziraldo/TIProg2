const db = require('../database/models');
const Product = db.Product;
const Op = db.Sequelize.Op;

const indexController = {
    index: function(req, res) {
        Product.findAll({
            include: [{association: "usuario_producto"}]
          })
            .then(prod => {
                // return res.send(prod)
              res.render('index', {productos: prod});
            })
            .catch(error => {
              console.log(error);
            });
    },
    add: function(req, res) {
        // si el user esta logueado se renderiza la vista, sino lo mando a login
        if (req.session.usuario) {
            return res.render('product-add', { error : "" });
        } else {
            return res.redirect('/users/login');
        }
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
    },
    detalle: function (req, res) {
        let idProducto = req.params.id;
        
        db.Product.findByPk(idProducto)
            .then(function(response) {
                
                return res.render("product",{ producto: response });
            })
            .catch(function(err) {
                console.log(err)
            })
    },
    buscar: function(req, res) {
        let nombreProducto = req.query.search;

        db.Product.findAll({
            where: {
                nombre: {
                    [Op.like] : `%${nombreProducto}%`
                }
            }
        })
            .then(function(response) {
                res.render('search-results', {productos: response});
            })
            .catch(function(err) {
                console.log(err);
                
            })
    },
    // todo el codigo de productos aca, findOne(), findByPk()...

    // relacionarlo entre tablas


}

module.exports = indexController;