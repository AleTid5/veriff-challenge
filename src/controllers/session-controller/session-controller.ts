import { sessionService } from '../../services';

export const getSession = async (req, res) => {
  try {
    const response = await sessionService.findSessionId(req.params.sessionId);
    console.log(response);
    return res.status(501).json();
  } catch (error: any) {
    console.error('Error happened', error);
    return res
      .status(error.response.status)
      .json({ message: error.response.data });
  }
};
