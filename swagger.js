const swaggerAutogen = require('swagger-autogen')();
const doc = { info: { title: 'API Pelis IU Digital', description: 'Documentación autogenerada' }, host: 'localhost:3000' };
const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/app.js'];
swaggerAutogen(outputFile, endpointsFiles, doc);