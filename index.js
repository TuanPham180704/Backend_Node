const http = require("node:http");
const fs = require("fs");
const path = require("path");
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/data") {
    const filePath = path.join(__dirname, "data.json");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Error reading file");
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
