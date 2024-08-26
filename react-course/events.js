const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (data) => {
  console.log("received");
  console.log(data);
});

customEmitter.emit("response", "hello world");
