// Spin up a server and listen for requests
// Return 200 OK for all requests
import http from 'http';

console.log('init');

const STATUS_HOST = process.env.STATUS_HOST || '0.0.0.0';
const STATUS_PORT = process.env.STATUS_PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK')
    console.debug('HTTP', req.httpVersion, req.method, req.url, `${req.connection.remoteAddress}:${req.connection.remotePort}`);
});


server.listen(STATUS_PORT, STATUS_HOST, () => {
    console.log(`Server listening on http://${STATUS_HOST}:${STATUS_PORT}`);
});

// If the server is stopped, the process will exit
server.on('close', () => {
    console.log('Server stopped. Exiting...')
    process.exit();
});

// Log any errors
server.on('error', (error) => {
    console.error('Server error:', error);
});

export default server;
