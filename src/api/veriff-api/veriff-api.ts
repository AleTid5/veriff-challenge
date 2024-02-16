import client from './client';
import type { MediaContext, Session, SessionMedia } from './types';

export const getSessionBySessionId = async <T extends Session>(
  sessionId: string,
): Promise<T> => {
  const { data } = await client.get<T>(`/sessions/${sessionId}`);
  return data;
};

export const getSessionMediaBySessionId = async <T extends SessionMedia>(
  sessionId: string,
): Promise<T> => {
  const { data } = await client.get<T>(`/sessions/${sessionId}/media`);
  return data;
};

export const getMediaContextBySessionId = async <T extends MediaContext>(
  sessionId: string,
): Promise<T> => {
  const { data } = await client.get<T>(`/media-context/${sessionId}`);
  return data;
};
