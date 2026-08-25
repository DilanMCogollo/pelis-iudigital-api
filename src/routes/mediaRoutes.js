const express=require('express');
const router=express.Router();

const{
    crearMedia,buscarMedias,buscarMediaPorId,actualizarMedia
}=require('../controllers/mediaController');


router.post('/',
    // #swagger.tags = ['Medias']
    crearMedia);
router.get('/',
    // #swagger.tags = ['Medias']
    buscarMedias);
router.get('/:id',
    // #swagger.tags = ['Medias']
    buscarMediaPorId);
router.put('/:id',
    // #swagger.tags = ['Medias']
    actualizarMedia);

module.exports=router;