const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist-t')));

// Route to serve the main index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Route to serve the test index.html
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist-t', 'index.html'));
});

// Proxy middleware options
const proxyOptions = {
    target: '', // Target server will be dynamic
    changeOrigin: true,
    router: (req) => {
        const targetUrl = req.url.slice(1); // Remove leading slash
        return targetUrl;
    }
};

// Create the proxy middleware
app.use('/api', createProxyMiddleware(proxyOptions));

// Handle preflight requests
app.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});