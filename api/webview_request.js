const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

app.use(cors());

const proxyOptions = {
  target: 'http://youtube.com',
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
  },
  onProxyRes: (proxyRes, req, res) => {
  },
};

app.use('/api', createProxyMiddleware(proxyOptions));

app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});