const http = require('http');
const port= 3000;

const server = http.createServer(function(req,res) {
    res.writeHead(200, {  'Content-Type':  'text/html '})
    fs.readFile('index.html' , function(error,data) {
        if (error) {
res.writeHead('404 Failed To Connect')
    } else {
req.write(data)    

}
})
res.end()
})
server.listen(port, function(error) {
    if (error) {
        console.log ('Something Went Wrong', error)
    } else {
        console.log ('Server is Listening'  + port)

    }
})





//create a server object:


http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 3000
