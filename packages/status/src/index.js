// Spin up a server and listen for requests
// Return 200 OK for all requests
import http from 'http';

console.log('init');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
    console.log('hit');
});

// Listen on port 3000
server.listen(3000, '0.0.0.0', () => {
    console.log('Server listening on http://0.0.0.0:3000');
});

// If the server is stopped, the process will exit
server.on('close', () => {
    console.log('Server stopped. Exiting...')
    process.exit();
});

export default server;
