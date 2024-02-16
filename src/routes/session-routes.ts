import express from 'express';
import { sessionController } from '../controllers';

const app = express();

app.get('/api/sessions/:sessionId', sessionController.getSession);

export default app;
