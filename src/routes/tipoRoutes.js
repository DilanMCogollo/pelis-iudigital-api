const express=require('express');
const router=express.Router();

const{
    crearTipo,
    traerTipos,
    traerTipoPorId,
    actualizarTipo
}=require('../controllers/tipoController');


router.post('/',
    // #swagger.tags = ['Tipos']
    crearTipo);
router.get('/',
    // #swagger.tags = ['Tipos']
    traerTipos);
router.get('/:id',
    // #swagger.tags = ['Tipos']
    traerTipoPorId);
router.put('/:id',
    // #swagger.tags = ['Tipos']
    actualizarTipo);

module.exports=router;

