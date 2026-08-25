const mongoose=require('mongoose');

const conectarBD= async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conexion exitosa con Mongo DB');
    }catch(err){
        console.error('Error al conectar Mongo DB');
    }
}

module.exports = conectarBD;