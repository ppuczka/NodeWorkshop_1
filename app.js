const http = require('http');

const requestHadler = require('./routes.js')

const server = http.createServer(requestHadler);
    server.listen(3000);
    //just simple server 