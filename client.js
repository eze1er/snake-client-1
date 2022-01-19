const net = require("net");
const { command } = require("yargs");
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
    console.log('Successfully connected to game serve');
    let count = 0;
    const myInterval = setInterval(() => {
      conn.write("Name: EZE");
      conn.write("Move: up");
      conn.write("Move: left");
      conn.write("Move: down");
      conn.write("Move: right");
      conn.write("Move: up");
      conn.write("Move: left"); 
      if (count === 1500) myStopFunction(myInterval  );
      count++;
      console.log(count);
    }, 2);

    function myStopFunction() {
      clearInterval(myInterval);
    }
  });

  return conn;
};

module.exports = connect;
