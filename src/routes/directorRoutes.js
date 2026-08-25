const express=require('express');
const router=express.Router();

const{
    crearDirector,
    traerDirectores,
    traerDirectorPorId,
    actualizarDirector
}=require('../controllers/directorController');

router.post('/',
    // #swagger.tags = ['Directores']
    crearDirector);
router.get('/',
    // #swagger.tags = ['Directores']
    traerDirectores,);
router.get('/:id',
    // #swagger.tags = ['Directores']
    traerDirectorPorId);
router.put('/:id',
    // #swagger.tags = ['Directores']
    actualizarDirector);

module.exports=router;