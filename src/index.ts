import express from 'express';
import './externalService';
import sessionRoutes from './routes/session-routes';

const app = express();
const port = process.env.PORT || 3001;

app.use('/', sessionRoutes);

app.listen(port, () => {
  console.info(`Service is listening at http://localhost:${port}`);
});
