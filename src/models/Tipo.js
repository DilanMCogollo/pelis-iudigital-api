const mongoose=require('mongoose');

const tipoModel=new mongoose.Schema(
    {
        nombre:{
            type: String,
            required: [true,'El nombre del tipo es obligatorio'],
            unique:true,
            trim:true
        },
        descripcion:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:{createdAt:'fechaCreacion',updatedAt:'fechaActualizacion'}
    }
);

module.exports=mongoose.model('Tipo',tipoModel);