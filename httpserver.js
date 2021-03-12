var http= require('http');
var url= require('url');        //import modules// create web server
var fs= require('fs');
const { Http2ServerRequest } = require('http2');
    http.createServer(function (request, response)      //create server
    {
var pathname= url.parse(request.url).pathname;
console.log('request  for' +pathname+ 'received');
fs.readFile(pathname.substr(1), function( err, data)
{
if(err)
{
    console.log(err);
    response.writeHead(404,{'content type': 'text/html'});
}
    else
    {
response.writeHead(200,{'content type': 'text/html'});
response.write(data.toString());
    }response.end();
}
);
    }).listen(3000);
    console.log('running serve');