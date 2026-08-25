const express=require('express');
const router=express.Router();

const{
    crearProductora,
    traerProductoras,
    traerProductoraPorId,
    actualizarProductora
}=require('../controllers/productoraController');


router.post('/',
    // #swagger.tags = ['Productoras']
    crearProductora);
router.get('/',
    // #swagger.tags = ['Productoras']
    traerProductoras);
router.get('/:id',
    // #swagger.tags = ['Productoras']
    traerProductoraPorId);
router.put('/:id',
    // #swagger.tags = ['Productoras']
    actualizarProductora);

module.exports=router;

