import express from 'express';
const router = express.Router();
import swaggerUi from 'swagger-ui-express';
import YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;