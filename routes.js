

const userList = [];

const requestHandler = ((req, res) => {
    const url = req.url;
    const method = req.method;
   
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
      }
      if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        userList.forEach(u => console.log(u));
        return res.end();
      }
      if (url === '/create-user') {
        const body = [];
        req.on('data', formData => {
          body.push(formData);
        });
        req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered
          userList.push(parsedBody.split('=')[1]);

        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
      }

});

module.exports = requestHandler;