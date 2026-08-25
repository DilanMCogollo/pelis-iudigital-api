const Productora=require('../models/Productora');

const crearProductora=async(req,res)=>{
    try{
        const {nombre,descripcion,estado,slogan}=req.body;
        const nuevaproductora=new Productora({nombre,descripcion,estado,slogan});
        await nuevaproductora.save();
        res.status(201).json(nuevaproductora);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

const traerProductoras=async(req,res)=>{
    try{
        const productoras=await Productora.find();
        res.json(productoras);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const traerProductoraPorId=async(req,res)=>{
    try{
        const productora=await Productora.findById(req.params.id);
        if(!productora) return res.status(404).json({error:'Productora no existente'});
        res.json(productora);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const actualizarProductora=async(req,res)=>{
    try{
        const {nombre,descripcion,estado,slogan}=req.body;
        const productoraActualizado=await Productora.findByIdAndUpdate(
            req.params.id,
            {nombre,descripcion,estado,slogan},
            {new:true,runValidators:true}
        );

        if(!productoraActualizado) return res.status(404).json({error:'La productora no ha sido encontrada, posible error en actualización'});
        res.json(productoraActualizado);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

module.exports= {crearProductora,traerProductoraPorId,traerProductoras,actualizarProductora};