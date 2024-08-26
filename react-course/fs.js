//SINCRONO DE TERMINA UNO EMPIEZA OTRO
const fs = require("fs");

const first = fs.readFileSync("./data/first.txt", "utf-8");
const second = fs.readFileSync("./data/second.txt");
console.log(first);
console.log(second.toString());

fs.writeFileSync("./data/third.txt", "Archivo creado con fs");

//ASINCRONO SE REALIZAN VARIOS A LA MISMA VEZ

fs.readFile("./data/third.txt", function (error, data) {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});
