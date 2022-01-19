const { CONNREFUSED } = require("dns");
// const net = require("net");
const connect = require('./client');



console.log(`Connecting at port: `);
connect();