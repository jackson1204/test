// 引入HTTP包
const http = require('http');

http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/html
    // 指定返回的code以及形式
    response.writeHead(200, {'Content-Type': 'text/html'});

    // Send the response body as "Hello World"
    // 打印输出一个<h1>元素
    response.end('<h1>Hello World</h1>');
}).listen(3000);

// 通过Console打印相关的提示信息
console.log('Server running at http://127.0.0.1:3000/');