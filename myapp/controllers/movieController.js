const { Association } = require('sequelize');
const db = require('../database/models');
const op = db.Sequelize.Op;

const indexController = {
  index: function (req, res) {

    let filtro = {
      where : [
        {awards: 2}, {length: 120}
      ],
      order: [["title" , "DESC"]],
      limit: 2,
      offset: 1
    }

    db.Movie.findAll(filtro)
    .then((result) => {
      return res.render("movies", {listaPeliculas: result})
    })
    .catch((err) => {
      return console.log(err);
    });

  },
  detalle: function (req, res) {
    let id = req.params.idPelicula;

   db.Movie.findByPk(id)
   .then(function(results) {
    return res.render("detalleMovies", {movie: results})
   })  // esta recibe la promesa afirmativa
   .catch(function(err) {
    return console.log(err);
   }) // esta recibe la promesa negativa

   
    
    
  },
  showFormCreate: function (req, res) {
    return res.render("registerMovie");
  },
  search: function(req, res) {
    let qs = req.query.pelicula;

    /* let filtro2 = {
      where: [
        {title: {
                  [op.like] : `%${qs}%`
                }}]
    }; */

    /* Manera 1 */
    let filtro1 = {
      include: [{ association: "actors" }, { association: "genre" }]
    }

    let filtro = {
      include: {
        all: true,
        nested: true
      }
    }

    db.Movie.findOne(filtro)
    .then((result) => {
      return res.send(result)
    }).catch((err) => {
      return console.log(err);
    });
  }

};

module.exports = indexController;
