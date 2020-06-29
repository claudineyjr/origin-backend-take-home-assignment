global.APPVERSION = require('./package.json').version;

const app = require('express')();
const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('./open-api/openapi.json');

const port = process.env.PORT  || 3000;
const bodyParser = require('body-parser');
app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});

app.use(bodyParser.json());
app.use('/origin/assignment/v1', require('./app/routes/index'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

