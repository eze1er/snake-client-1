const { CONNREFUSED } = require("dns");
const net = require("net");

// establishes a connection with the game server
const connect = function (socket) {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541, // PORT number here,

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    // code that does something
    conn.write('Name: EZE');
    console.log('Successfully connected');

  });
  
  return conn;
};

console.log(`Connecting at port: `);
connect();