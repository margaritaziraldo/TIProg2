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
        if (!req.session.usuario) {
            return res.render('register');
        } else {
            return res.redirect('/');
        }
    },

    login: (req, res) => {
        if (!req.session.usuario) {
            return res.render('login');
        } else {
            return res.redirect('/');
        }
    },

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
                    if (bcryptjs.compareSync(form.contrasenia, result.contrasenia)) {
                        // Crear cookie (recordarme)
                        
                        // Crear session
                        req.session.usuario = result;
                        return res.redirect("/")
                    } else {
                        return res.send("Contraseña incorrecta")
                    }
                } else {
                    return res.send("No se encontro un usuario")
                }

            }).catch((err) => {
                return console.log(err)
            });
    },

    results: (req, res) => {
        // let qs = req.query;

        let form = req.body;
        let pass = bcryptjs.hashSync(form.contrasenia, 10);

        form.contrasenia = pass;

        console.log(form);
        

        db.User.create(form)
            .then((result) => {
                return res.redirect("/users/login")

            }).catch((err) => {
                return console.log(err)


            });

    },

    logout: (req, res)=>{
        req.session.destroy()
        return res.redirect("/")
    }
}

//conectar todo con las vistas tambien, 

module.exports = userControllers;