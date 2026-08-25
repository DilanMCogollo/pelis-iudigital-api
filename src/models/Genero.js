const mongoose=require('mongoose');

const generoModel=new mongoose.Schema(
    {
        nombre:{
            type:String,
            required: [true,'El nombre del genero es obligatorio'],
            unique:true,
            trim:true
        },
        estado:{
            type:String,
            enum:['Activo','Inactivo'],
            default:'Activo'
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

module.exports=mongoose.model('Genero',generoModel);