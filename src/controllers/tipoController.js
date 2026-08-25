const Tipo=require('../models/Tipo');

const crearTipo=async(req,res)=>{
    try{
        const {nombre,descripcion}=req.body;
        const nuevoTipo=new Tipo({nombre,descripcion});
        await nuevoTipo.save();
        res.status(201).json(nuevoTipo);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

const traerTipos=async(req,res)=>{
    try{
        const tipos=await Tipo.find();
        res.json(tipos);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const traerTipoPorId=async(req,res)=>{
    try{
        const tipo=await Tipo.findById(req.params.id);
        if(!tipo) return res.status(404).json({error:'El tipo no existe'});
        res.json(tipo);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const actualizarTipo=async(req,res)=>{
    try{
        const {nombre,descripcion}=req.body;
        const tipoActualizado=await Tipo.findByIdAndUpdate(
            req.params.id,
            {nombre,descripcion},
            {new:true,runValidators:true}
        );

        if(!tipoActualizado) return res.status(404).json({error:'El tipo  no fue encontrado, posible error en actualización'});
        res.json(tipoActualizado);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

module.exports= {crearTipo,traerTipoPorId,traerTipos,actualizarTipo};