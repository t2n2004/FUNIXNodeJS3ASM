const http = require('http');

const server = http.createServer((rep, res) => {
    console.log(rep);
});

server.listen(3000);