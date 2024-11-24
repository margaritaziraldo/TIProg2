const db = require('../database/models');
const bcrypt = require("bcryptjs")
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
    //loginUser
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


    //aca adentro tenemos que poner toda la logica de el modelo de users

    results: (req, res)=>{
        // let qs = req.query;

        let form = req.body;

           db.User.create(form)
           .then((result)=>{
            return res.redirect("/users/login")

           }).catch((err)=>{
            return console.log(err)


           });
        
        
        
        
        
        //esto en el caso de usar el metodo get
        // let form = req.body;
        
        // let pass = bcrypt.hashSync(form.password, 10)
        // form.password = pass;
        
        // db.User.create(form)
        // .then(function(results) {
        //     return res.redirect('/users/login')
        // })
        // .catch(function(error) {
        //     console.log(error);
        // })


    },
    // loginUser: (req, res)=>{

    //     //llenar con la logica

    }
    
    //conectar todo con las vistas tambien, 



module.exports = userControllers;