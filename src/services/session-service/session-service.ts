import VeriffApi from '@/api/veriff-api';

export const getSession = async (sessionId: string) => {
  return await VeriffApi.getSessionBySessionId(sessionId);
};

export const getSessionMedia = async (sessionId: string) => {
  return await VeriffApi.getSessionMediaBySessionId(sessionId);
};

export const getMediaContext = async (sessionId: string) => {
  return await VeriffApi.getMediaContextBySessionId(sessionId);
};
