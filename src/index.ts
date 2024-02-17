import 'dotenv/config';
import 'module-alias/register';
import express from 'express';
import '@/externalService';
import sessionRoutes from '@/routes/session-routes';
import errorHandler from '@/middlewares/error-handler';

const app = express();
const port = process.env.PORT || 3001;

app.use('/api', sessionRoutes);
app.use(errorHandler);

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.info(`Service is listening at http://localhost:${port}`);
    });
}

export default app;
