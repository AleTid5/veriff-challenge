import client from './client';

export const getSessionBySessionId = async (
  sessionId: string,
): Promise<unknown> => {
  try {
    const { data } = await client.get(`/sessions/${sessionId}`);
    return data;
  } catch (error) {
    // Monitor this log in Datadog
    console.error(error);
    throw error;
  }
};
