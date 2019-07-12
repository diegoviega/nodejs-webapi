const http = require('http');
const express = require("express");
const spoilersRoute = require("./routes/spoiler");

const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.set("port", port);

app.use(express.json());

app.use("/api", spoilersRoute);

app.use((request, response, next) => {
    response.status(404).send("Página não encontrada");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
     console.log(`server running at http://${hostname}:${port}/`);
});
// const server = http.createserver((req, res) => {
//    res.statuscode = 200;

//    fs.readfile("index.html", (err, data) =>{
//        if(err)
//             console.log(err)
//         else
//             res.write(data);
//         res.end();   
//    });
// //    res.setheader('content-type', 'text/plain');
// //    res.end('hello world\n');
// });

// server.listen(port, hostname, () => {
// console.log(`server running at http://${hostname}:${port}/`);
// });