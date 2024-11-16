const db = require('../database/models');
const bcrypt = require("bcryptjs")

module.exports = {
    register: (req, res) => {
        res.render('register');
    },
    login: (req, res) => {
        res.render('login');
      }


      //aca adentro tenemos que poner toda la logica de el modelo de users

      //conectar todo con las vistas tambien
      
};

