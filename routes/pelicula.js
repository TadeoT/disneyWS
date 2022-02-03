var express = require('express');
var router = express.Router();
const modeloGenero = require('../models').Genero
const modeloPelicula = require('../models').Pelicula


router.get('/', async (req, res) => {
    let personajes = await modeloPelicula.findAll({
        attributes: ['id','titulo', 'imagen'],
    })
    res.json(personajes);
});
router.get('/:id', async (req, res) => {
    let personaje = await modeloPelicula.findOne({
        where:{
            id: req.params.id
        },
        include: [{ model:modeloGenero}]
    })

    if(personaje == null)  return res.status(401).json({ error: 'movie id no found' })
    res.json(personaje);
});

module.exports = router;