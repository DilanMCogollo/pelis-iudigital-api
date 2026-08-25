require('dotenv').config();
const app=require('./src/app');
const conectarBD=require('./src/config/conexionbd');

conectarBD();

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); 