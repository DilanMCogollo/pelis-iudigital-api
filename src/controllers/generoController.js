const Genero=require('../models/Genero');

const crearGenero=async(req,res)=>{
    try{
        const {nombre,descripcion,estado}=req.body;
        const nuevoGenero=new Genero({nombre,descripcion,estado});
        await nuevoGenero.save();
        res.status(201).json(nuevoGenero);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

const traerGeneros=async(req,res)=>{
    try{
        const generos=await Genero.find();
        res.json(generos);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const traerGeneroPorId=async(req,res)=>{
    try{
        const genero=await Genero.findById(req.params.id);
        if(!genero) return res.status(404).json({error:'Género no existe'});
        res.json(genero);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const actualizarGenero=async(req,res)=>{
    try{
        const {nombre,descripcion,estado}=req.body;
        const generoActualizado=await Genero.findByIdAndUpdate(
            req.params.id,
            {nombre,descripcion,estado},
            {new:true,runValidators:true}
        );

        if(!generoActualizado) return res.status(404).json({error:'Genero no encontrado posible error en actualización'});
        res.json(generoActualizado);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

module.exports= {crearGenero,traerGeneroPorId,traerGeneros,actualizarGenero};