var express = require('express');
var router = express.Router();
const modeloPersonaje = require('../models').Personaje
const modeloPelicula = require('../models').Pelicula


router.get('/', async (req, res) => {
    let personajes = await modeloPersonaje.findAll({
        include: [{ model:modeloPelicula}]
    })
    res.json(personajes);
});

module.exports = router;