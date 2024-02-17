import VeriffApi from '@/api/veriff-api';
import sessionMediaMock from './mocks/session-media.mock';
import mediaContextMock from './mocks/media-context.mock';

export const mockExternalServices = () => {
    jest.spyOn(VeriffApi, 'getSessionMediaBySessionId').mockResolvedValue(
        sessionMediaMock
    );
    jest.spyOn(VeriffApi, 'getMediaContextBySessionId').mockResolvedValue(
        mediaContextMock
    );
};
