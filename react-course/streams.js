//CREAR ARCHIVO
//const { writeFile } = require("fs/promises");

//const createBigFile = async () => {
//  await writeFile("./data/bigfile.txt", "hello world".repeat(1000));
//};

//createBigFile();

//METODO STREAMS
const { createReadStream } = require("fs");

const stream = createReadStream("./data/bigfile.txt", "utf-8");

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("ya termino de leer el archivo");
});

stream.on("error", (error) => {
  console.log(error);
});
