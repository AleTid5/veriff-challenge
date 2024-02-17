import express from 'express';
import { sessionController } from '@/controllers';
import sessionValidator from '@/middlewares/session-validator';

const app = express();

app.get('/sessions/:sessionId', sessionValidator, sessionController.getSession);

export default app;
