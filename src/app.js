const express=require('express');
const generoRoutes=require('./routes/generoRoutes');
const directorRoutes=require('./routes/directorRoutes');
const productoraRoutes=require('./routes/productoraRoutes');
const tipoRoutes=require('./routes/tipoRoutes');
const mediaRoutes=require('./routes/mediaRoutes');

const app =express();
const swaggerUi=require('swagger-ui-express');
const swaggerFile=require('../swagger-output.json');

app.use(express.json());

app.use('/api/generos',generoRoutes);
app.use('/api/director',directorRoutes);
app.use('/api/productora',productoraRoutes);
app.use('/api/tipos',tipoRoutes);
app.use('/api/medias',mediaRoutes);


app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerFile));

module.exports=app;