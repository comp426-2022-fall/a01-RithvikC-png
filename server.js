const http = require('http');

const fs = require('fs');

var minimist = require('minimist');

const arg = minimist(process.argv.slice(2));

const port = arg.port || 3000;

const hostName = './public/index.html';

fs.readfile(hostName, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});