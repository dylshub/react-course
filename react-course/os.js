const os = require("os"); //exportando desde las librerias de react en internet

console.log(os.userInfo()); //informacion del usuario
console.log(os.uptime()); //segundos que lleva encendida la pc
console.log(os.platform()); //win32
console.log(os.totalmem()); //total de memoria
console.log(os.freemem()); //total de memoria libre

console.table({
  os: os.platform(),
  version: os.release(),
  totalmemory: os.totalmem(),
});
