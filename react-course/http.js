const http = require("http");

http
  .createServer((request, response) => {
    console.log(request.url);

    if (request.url == "/") {
      response.write("BIENVENIDO AL SERVIDOR");
      return response.end(); //el return sirve para que ya no continue con el demas codigo
    }
    if (request.url === "/about") {
      response.write("ACERCA DE");
      return response.end();
    }

    response.write(`
      <h1>Not Found </h1>
      <p>ESTA PAGINA NO ESTA DISPONIBLE</p>
      <a href="/">VOLVER A LA PAGINA PRINCIPAL</a>
      `);
    response.end(); //en lugar de .end tambien se puede poner html
  })
  .listen(3000);

console.log("Servidor escuchando en el puerto 3000");

// en el navegador buscar= localhost:3000 (aparecera hello world)
