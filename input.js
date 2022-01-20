const { stdout } = require('process');
// const connect = require('./client')
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  // connect();
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  // your code here
  if (key === '\u0003') {
    console.log('you click ^c');
    process.exit();
  }
  const keyBinds = {
    w: 'up',
    a: 'left',
    s: 'down',
    d: 'right'
  };

  if (Object.keys(keyBinds).includes(key)) {
    connection.write(`Move: ${keyBinds[key]}`);
    console.log(`Move: ${keyBinds[key]}`);
  }

  const chats = {
    u: 'u r ded',
    y: 'u can\'t hide',
    l: 'l8er'
  };

  if (Object.keys(chats).includes(key)) {
    connection.write(`Say: ${chats[key]}`);
    console.log(`Say: ${chats[key]}`);
  }

};
// stdin.on("data", handleUserInputer);

module.exports = {setupInput};