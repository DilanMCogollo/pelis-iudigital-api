const express=require('express');
const router=express.Router();

const{
    crearGenero,
    traerGeneros,
    traerGeneroPorId,
    actualizarGenero
}=require('../controllers/generoController');


router.post('/',
    // #swagger.tags = ['Generos']
    crearGenero);
router.get('/',
    // #swagger.tags = ['Generos']
    traerGeneros);
router.get('/:id',
    // #swagger.tags = ['Generos']
    traerGeneroPorId);
router.put('/:id',
    // #swagger.tags = ['Generos']
    actualizarGenero);

module.exports=router;

