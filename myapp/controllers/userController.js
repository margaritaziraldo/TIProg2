const db = require('../database/models/User');
const bcrypt = require("bcryptjs")

const userControllers = {
    register: (req, res) => {
        res.render('register');
    },
    //loginUser
    login: (req, res) => {
        res.render('login');
    },
    formLogin: function(req, res) {
        // Esta ruta no renderiza, redirecciona al usuario a home
        return
    },
    formRegister: function(req, res) {
        // Esto no renderiza, que redirecciona al usuario a login
        return
    },


    //aca adentro tenemos que poner toda la logica de el modelo de users

    //results


    //logout
    logout: function(req, res) {
        // Esta ruta no renderiza, redirecciona al usuario a (login o home)
        // limpiar la sesión y borrar la cookie
    }

    //conectar todo con las vistas tambien, 

};

module.exports = userControllers;