const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/fundamentos') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Hello World, fundamentos nodejs aplicado.');
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Rota não encontrada');
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});