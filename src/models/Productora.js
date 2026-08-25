const mongoose=require('mongoose');

const productoraModel=new mongoose.Schema(
    {
        nombre:{
            type:String,
            required: [true,'El nombre de la productora es obligatorio'],
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
        },
        slogan:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:{createdAt:'fechaCreacion',updatedAt:'fechaActualizacion'}
    }
);

module.exports=mongoose.model('Productora',productoraModel);