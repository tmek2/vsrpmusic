// Minimal HTTP server to satisfy Render web service health checks
// and keep the Discord bot running continuously.

// Start the bot runtime (side-effect on import)
require('./AeroX/index.js');

const http = require('http');
const port = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'not_found' }));
});

server.listen(port, () => {
  console.log(`[HTTP] Health server listening on port ${port}`);
});