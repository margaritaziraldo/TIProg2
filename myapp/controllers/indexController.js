const db = require('../database/models');
const Product = db.Product;
const Op = db.Sequelize.Op;

const indexController = {
    index: function (req, res) {
        Product.findAll({
            include: [{ association: "usuario_producto" }]
        })
            .then(prod => {
                // return res.send(prod)
                res.render('index', { productos: prod });
            })
            .catch(error => {
                console.log(error);
            });
    },
    add: function (req, res) {
        // si el user esta logueado se renderiza la vista, sino lo mando a login
        if (req.session.usuario) {
            return res.render('product-add', { error: "" });
        } else {
            return res.redirect('/users/login');
        }
    },

    formAdd: function (req, res) { //post que guarda y procesa la informacion que se relleno en el form (el de arriba)
        let body = req.body;
        if (body.name == '') {
            res.send("El nombre de tu producto no puede estar vacio")
        } else if (body.image == '') {
            res.send("Por favor, ingresa una imagen para tu producto")
        } else if (body.description == '') {
            res.send('La descripción no puede estar vacia')
        } else {
            db.Product.create(body)
                .then(function (results) {
                    return res.redirect('/')
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    },

    detalle: function (req, res) {
        let idProducto = req.params.id;

        db.Product.findByPk(idProducto)
            .then(function (response) {

                return res.render("product", { producto: response });
            })
            .catch(function (err) {
                console.log(err)
            })
    },
    buscar: function (req, res) {
        let nombreProducto = req.query.search;

        db.Product.findAll({
            where: {
                nombre: {
                    [Op.like]: `%${nombreProducto}%`
                }
            }
        })
            .then(function (response) {
                res.render('search-results', { productos: response });
            })
            .catch(function (err) {
                console.log(err);

            })
    },
    // todo el codigo de productos aca, findOne(), findByPk()...

    // relacionarlo entre tablas


}

module.exports = indexController;