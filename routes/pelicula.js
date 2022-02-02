var express = require('express');
var router = express.Router();
const modeloGenero = require('../models').Genero
const modeloPelicula = require('../models').Pelicula


router.get('/', async (req, res) => {
    let personajes = await modeloPelicula.findAll({
        include: [{ model:modeloGenero}]
    })
    res.json(personajes);
});

module.exports = router;