const db = require('../database/models');
const bcryptjs = require("bcryptjs");
const User = db.User;


// User.findAll({
//   include: [{association: "productos_usuario"}]
// })
//   .then(users => {
//     res.send(users);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const userControllers = {
    register: (req, res) => {
        res.render('register');
    },

    login: (req, res) => {
        res.render('login');
    },

    // formLogin: function(req, res) {
    //     // Esta ruta no renderiza, redirecciona al usuario a home
    //     return
    // },
    // formRegister: function(req, res) {
    //     // Esto no renderiza, que redirecciona al usuario a login
    //     return
    // },

    loginUser: (req, res) => {
        let form = req.body;

        let filtro = {
            where: {
                email: form.email
            }
        };

        db.User.findOne(filtro)
            .then((result) => {
                if (result != undefined) {
                    // let validarClave = bcryptjs.compareSync( form.contrasenia, result.contrasenia);
                    
                    // if (validarClave) {
                    //     return res.redirect("/")
                    // } else {
                    //     return res.send("Clave incorrecta");
                    // }
                    let claves = {
                         claveFormulario: form.contrasenia,
                         claveBaseDatos: result.contrasenia
                     };
                         return res.send(claves);
                } else {
                    return res.send("No se encontro un usuario")
                }

            }).catch((err) => {
                return console.log(err)
            });

        return res.send(form)
    },

    results: (req, res) => {
        // let qs = req.query;

        let form = req.body;
        let pass = bcryptjs.hashSync(form.contrasenia, 10);

        form.contrasenia = pass;

        db.User.create(form)
            .then((result) => {
                return res.redirect("/users/login")

            }).catch((err) => {
                return console.log(err)


            });

    }
}

//conectar todo con las vistas tambien, 



module.exports = userControllers;