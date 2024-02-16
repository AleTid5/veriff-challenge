import { NextFunction, Request, Response } from 'express';

const uuidRegex =
  /[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

const sessionValidator = (req: Request, res: Response, next: NextFunction) => {
  const { sessionId } = req.params;

  if (!sessionId) {
    return res.status(400).json({ message: 'Session ID is required' });
  }

  if (!uuidRegex.test(sessionId)) {
    return res.status(400).json({ message: 'Session ID format is invalid' });
  }

  next();
};

export default sessionValidator;
