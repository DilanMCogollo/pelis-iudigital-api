const express=require('express');
const router=express.Router();

const{
    crearMedia,buscarMedias,buscarMediaPorId,actualizarMedia,eliminarMedia
}=require('../controllers/mediaController');


router.post('/',
    // #swagger.tags = ['Media']
    crearMedia);
router.get('/',
    // #swagger.tags = ['Media']
    buscarMedias);
router.get('/:id',
    // #swagger.tags = ['Media']
    buscarMediaPorId);
router.put('/:id',
    // #swagger.tags = ['Media']
    actualizarMedia);
router.delete('/:id',
    // #swagger.tags = ['Media']
    eliminarMedia);

module.exports=router;