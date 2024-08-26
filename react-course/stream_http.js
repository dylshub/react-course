const http = require("http");
const { createReadStream } = require("fs");

const server = http.createServer((req, res) => {
  const fileStream = createReadStream("./data/bigfile.txt", {
    encoding: "utf-8",
  });

  fileStream.on("data", (chunk) => {
    res.write(chunk);
  });

  fileStream.on("error", (error) => {
    console.log(error);
  });
});

server.listen(3000);
console.log(`server listen in port ${3000}`);
