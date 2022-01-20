const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.write("Name: EZE")

  conn.write("Message: Somebody see this msg?")

  conn.on('connect', (incomingData) => {
    console.log('Successfully connected to game serve');
    incomingData && console.log(`Connect Message: ${incomingData}`);

  });
  conn.on("data", (incomingData) => {
    console.log(`Server Message: ${incomingData}`);
  });
  return conn;
};

module.exports = { connect };
