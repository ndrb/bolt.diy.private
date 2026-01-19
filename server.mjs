import express from 'express';
import compression from 'compression';
import { createRequestHandler } from '@remix-run/express';

// Load environment variables
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });
dotenv.config();

const app = express();

// Compression middleware
app.use(compression());

// Serve static files from the build/client directory
app.use(express.static('build/client', {
    maxAge: '1y',
    immutable: true,
}));

// Serve assets from the public directory
app.use(express.static('public', {
    maxAge: '1h',
}));

// Handle all other requests with Remix
const build = await import('./build/server/index.js');
app.all('*', createRequestHandler({ build }));

const port = process.env.PORT || 5173;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, () => {
    console.log(`Express server running at http://${host}:${port}`);
});
