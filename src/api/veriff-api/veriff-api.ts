import client from './client';
import type { MediaContext, Session, SessionMedia } from './types';

export const getSessionBySessionId = async (
  sessionId: string,
): Promise<Session> => {
  try {
    const { data } = await client.get<Session>(`/sessions/${sessionId}`);
    return data;
  } catch (error) {
    // Monitor this log in Datadog
    console.error(error);
    throw error;
  }
};

export const getSessionMediaBySessionId = async (
  sessionId: string,
): Promise<SessionMedia> => {
  try {
    const { data } = await client.get<SessionMedia>(
      `/sessions/${sessionId}/media`,
    );
    return data;
  } catch (error) {
    // Monitor this log in Datadog
    console.error(error);
    throw error;
  }
};

export const getMediaContextBySessionId = async (
  sessionId: string,
): Promise<MediaContext> => {
  try {
    const { data } = await client.get<MediaContext>(
      `/media-context/${sessionId}`,
    );
    return data;
  } catch (error) {
    // Monitor this log in Datadog
    console.error(error);
    throw error;
  }
};
