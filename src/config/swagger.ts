import swaggerAutogen from 'swagger-autogen'

const doc = {
  info: {
    version: 'v1.0.0',
    title: 'Documentación de la API',
    description: 'Implementación de Swagger para documentar la API en la ruta de requests_types.route.ts'
  },
  servers: [
    {
      url: 'http://localhost:5572',
      description: 'Servidor local'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer'
      }
    }
  }
}

const outputFile = './../swagger_documentation.json';
const endpointsFiles = ['./../routes/requests_types.route.ts'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);
