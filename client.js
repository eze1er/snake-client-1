const net = require("net");
// const { command } = require("yargs");
// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    // host: '165.227.47.243', // IP address here,
    port: 50541, // PORT number here,
    // port: 8080, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.write("Name: EZE")

  conn.on('connect', (incomingData) => {
    // code that does something
    console.log('Successfully connected to game serve');
    incomingData && console.log(`Connect Message: ${incomingData}`);

  });
  conn.on("data", (incomingData) => {
    // runs when connection is first established
    console.log(`Server Message: ${incomingData}`);
  });
  return conn;
};

module.exports = { connect };

  // const up = 'Move: up';
  // const right = 'Move: right';
  // const down = 'Move: down';
  // const left = 'Move: left';
  // setInterval(() => { conn.write(`${up}`)}, 500);
  // setInterval(() => { conn.write(`${right}`)}, 500);
  // setInterval(() => { conn.write(`${down}`)}, 500);
  // setInterval(() => { conn.write(`${left}`)}, 500);