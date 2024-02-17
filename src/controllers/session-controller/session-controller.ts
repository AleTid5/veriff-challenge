import type { Request, Response } from 'express';
import { mediaService, sessionService } from '@/services';

export const getSession = async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;

    const [sessionMedia, mediaContext] = await Promise.all([
      sessionService.getSessionMedia(sessionId),
      sessionService.getMediaContext(sessionId),
    ]);

    const groupedMedia = mediaService.groupMedia(sessionMedia, mediaContext);
    const sortedMedia = mediaService.sortByProbability(groupedMedia);

    return res.status(200).json(sortedMedia);
  } catch (error: any) {
    // Log error in some monitoring service (e.g. Datadog, Sentry, etc.)
    console.error('Error happened', error);
    return res.status(error.response.status).json({ message: error.message });
  }
};
