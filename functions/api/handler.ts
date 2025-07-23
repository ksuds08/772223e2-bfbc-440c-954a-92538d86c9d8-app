import { Router } from 'itty-router';

const router = Router();

router.get('/api/templates', async (request) => {
    const templates = [
        { id: 1, name: 'Standard Business', industry: 'Business' },
        { id: 2, name: 'Creative Portfolio', industry: 'Creative' },
        { id: 3, name: 'Tech Resume', industry: 'Technology' }
    ];
    return new Response(JSON.stringify(templates), { headers: { 'Content-Type': 'application/json' } });
});

router.all('*', () => new Response('Not Found', { status: 404 }));

export default {
    fetch: router.handle
};