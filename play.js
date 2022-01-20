// const { CONNREFUSED } = require("dns");
// const net = require("net");
// const stdin = process.stdin;
const { connect } = require("./client");
const { setupInput } = require("./input");

// console.log("Connecting ...");
// connect();

setupInput(connect());
