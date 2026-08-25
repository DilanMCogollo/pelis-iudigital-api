const mongoose=require('mongoose');

const directorModel=new mongoose.Schema(
    {
        nombre:{
            type:String,
            required: [true,'El nombre del director es obligatorio'],
            unique:true,
            trim:true
        },
        estado:{
            type:String,
            enum:['Activo','Inactivo'],
            default:'Activo'
        },
    },
    {
        timestamps:{createdAt:'fechaCreacion',updatedAt:'fechaActualizacion'}
    }
)

module.exports=mongoose.model('Director',directorModel);