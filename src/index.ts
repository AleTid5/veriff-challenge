import 'module-alias/register';
import express from 'express';
import './externalService';
import sessionRoutes from './routes/session-routes';

const app = express();
const port = process.env.PORT || 3001;

app.use('/api', sessionRoutes);

app.listen(port, () => {
  console.info(`Service is listening at http://localhost:${port}`);
});
