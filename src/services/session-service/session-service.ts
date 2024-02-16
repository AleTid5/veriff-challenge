import VeriffApi from '@/api/veriff-api';

export const findSessionId = async (sessionId: string) => {
  try {
    const response = await VeriffApi.getSessionBySessionId(sessionId);
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Error finding session id from Veriff API');
  }
};
