const db = require('../database/models');
const bcrypt = require("bcryptjs");
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
        if (form.email == ""){
            return res.send("Porfavor ingresar email")
        } else if (form.contrasenia == "") {
            return res.send("Porfavor ingrese una contraseña")
        } else { db.User.findOne(filtro)
            .then(function(result){
                if (result != undefined){
                    let validClave = bcrypt.compareSync( form.contrasenia , result.contrasenia);
                    
                    if(validClave){
                        req.session.usuario = result;
                        return res.redirect("/");
                    } else {
                        return res.send("Clave incorrecta");
                    }
                } else {
                    return res.send("No se encontro un usuario");
                }
            })
            .catch(function(error){
                return console.log(error);
            })

        }
    },

    results: (req, res) => {
        let form = req.body;

        if(form.email == ""){
            return res.send("Porfavor ingresar email")
          }
          else if (form.name == "") {
            return res.send("Porfavor ingrse un nombre de usuario")
          }
          else if (form.contrasenia == "") {
            return res.send("Porfavor ingrese una contraseña")
          }
          else{
            let pass = bcrypt.hashSync(form.contrasenia, 10)
            form.password = pass;
            
            db.User.create(form)
            .then(function(results) {
                return res.redirect('/users/login')
            })
            .catch(function(error) {
                console.log(error);
            })
          }


        // let pass = bcrypt.hashSync(form.contrasenia, 10);
        // form.contrasenia = pass;

        // console.log(form);
        

        // db.User.create(form)
        //     .then((result) => {
        //         return res.redirect("/users/login")

        //     }).catch((err) => {

    },

    logout: (req, res)=>{
        req.session.destroy()
        return res.redirect("/")
    }
}

//conectar todo con las vistas tambien, 

module.exports = userControllers;