import type { Request, Response } from 'express';

const errorHandler = (_: Request, res: Response) => {
    res.status(500).json({
        message: 'The URL you are trying to access is not available',
    });
};

export default errorHandler;
