const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url == "/") {
    response.write("BIENVENIDO AL SERVIDOR");
    return response.end(); //el return sirve para que ya no continue con el demas codigo
  }
  if (request.url === "/about") {
    //CODIGO BLOQUEANTE
    for (let i = 0; i < 1000000; i++) {
      console.log(Math.random() * i);
    }

    return response.end("ABOUT PAGE");
  }

  response.write("NOT FOUND");
  response.end(); //en lugar de .end tambien se puede poner html
});
server.listen(3000);
console.log("SERVER ON PORT 3000");
