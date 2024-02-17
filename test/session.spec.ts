import request from 'supertest';
import app from '../src';
import { expectGetSessions } from './expects/api-sessions';
import { mockExternalServices } from './helpers';

describe('GET /api/sessions/:sessionId', () => {
    beforeAll(mockExternalServices);

    test('should return session with media grouped by context', async () => {
        const response = request(app)
            .get('/api/sessions/90d61876-b99a-443e-994c-ba882c8558b6')
            .expect('Content-Type', /application\/json/)
            .expect(200);

        const { body } = await response;

        expect(body).toEqual(expectGetSessions);

        return response;
    });

    test('should fail because SessionId is empty', async () => {
        const response = request(app)
            .get('/api/sessions')
            .expect('Content-Type', /application\/json/)
            .expect(500);

        const { body } = await response;

        expect(body).toEqual({
            message: 'The URL you are trying to access is not available',
        });

        return response;
    });

    test.each([
        ['90d-b99a-443e-994c-ba882c8558b6'],
        ['90d61876-b99a-443e-994c-ba882c8558b6565'],
        ['90d61876-b99a-443eaasd-994c-ba882c8558b6'],
        ['90d61876-b99aadd-443e-994c-ba882c8558b6'],
        ['invalid-session-id'],
    ])('should fail because SessionId is invalid (%s)', async (sessionId) => {
        const response = request(app)
            .get(`/api/sessions/${sessionId}`)
            .expect('Content-Type', /application\/json/)
            .expect(400);

        const { body } = await response;

        expect(body).toEqual({ message: 'Session ID format is invalid' });

        return response;
    });
});
