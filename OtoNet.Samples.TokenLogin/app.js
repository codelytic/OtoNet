var http = require("http");
var fs = require("fs");
http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.end(fs.readFileSync("index.html"));
}).listen(3000, "127.0.0.1", () => {
    console.log("Server running...");
});
