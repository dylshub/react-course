//LLAMANDO myModule.js
const web = require("./module/myModule.js"); //IMPORTANDO EL ARCHIVO myModule.js

console.log(web); //Imprimiendo la constante del archivo myModule.js
//FIN USO myModule.js

//IMPORTANDO index.js de math

const math = require("./math/index.js");

console.log(math);

console.log(math.add(20, 20));
console.log(math.substract(20, 10));
console.log(math.multyply(10, 10));
console.log(math.divide(10, 2));
