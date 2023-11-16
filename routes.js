const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Lab 2.1</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
          console.log(chunk);
          body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
            
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
            
        });
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>List of users</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>This is Lab 2.1!</h1></body>');
    res.write('</html>');
    res.end();
};

//module.exports = requestHandler;

//module.exports = {
//    handler : requestHandler,
//    someText : 'some text here'
//};

//module.exports.handler = requestHandler;
//module.exports.someText = 'some text here';

exports.handler = requestHandler;
exports.someText = 'some text here';