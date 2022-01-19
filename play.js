const { CONNREFUSED } = require("dns");
// const net = require("net");
const connect = require('./client');
const stdin = process.stdin;

const setupInput = function () {
  const stdin = process.stdin;
  connect();
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (input) {
  // your code here
  if (input === '\u0003') {
    process.exit();
  }
  // } else if (input === 'w') {
  //   connect.write("Move: up");
  // } else if (input === 'a') {
  //   connect.write("Move: left");
  // } else if (input === 's') {
  //   connect.write("Move: down")
  // } else if (input === 'd') {
  //   connect.write("Move: right");
  // }
};

console.log(`Connecting at port: `);
// connect();
const stdin1 = setupInput();
// stdin1.on('data', data => {
//   console.log(`You typed ${data.toString()}`);
// });
