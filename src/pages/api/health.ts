import type { APIRoute } from 'astro';

/**
 * Health Check Endpoint
 *
 * Returns the health status of the API
 * Useful for monitoring and deployment verification
 */
export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      service: 'elmex-api'
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};
