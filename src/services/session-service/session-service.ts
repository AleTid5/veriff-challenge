import VeriffApi from '@/api/veriff-api';

export const findSessionId = async (sessionId: string) => {
  const response = await VeriffApi.getSessionBySessionId(sessionId);
  return response;
};
