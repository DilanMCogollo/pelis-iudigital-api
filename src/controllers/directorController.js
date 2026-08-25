const Director=require('../models/Director');

const crearDirector=async(req,res)=>{
    try{
        const {nombre,estado}=req.body;
        const nuevoDirector=new Director({nombre,estado});
        await nuevoDirector.save();
        res.status(201).json(nuevoDirector);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

const traerDirectores=async(req,res)=>{
    try{
        const directores=await Director.find();
        res.json(directores);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const traerDirectorPorId=async(req,res)=>{
    try{
        const director=await Director.findById(req.params.id);
        if(!director) return res.status(404).json({error:'El director no existe'});
        res.json(director);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const actualizarDirector=async(req,res)=>{
    try{
        const {nombre,estado}=req.body;
        const directorActualizado=await Director.findByIdAndUpdate(
            req.params.id,
            {nombre,estado},
            {new:true,runValidators:true}
        );

        if(!directorActualizado) return res.status(404).json({error:'El director no fue encontrado, posible error en actualización'});
        res.json(directorActualizado);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};


module.exports= {crearDirector,traerDirectorPorId,traerDirectores,actualizarDirector};