const express = require("express");
const http = require("http");
const path = require('path');

app = express();
const port = process.env.PORT || 8080;

const dist = path.join(express.static(__dirname, 'dist'));

const host = http.createServer(dist);

host.listen(port);