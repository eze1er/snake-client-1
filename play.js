// const stdin = process.stdin;
const { connect } = require("./client");
const { setupInput } = require("./input");


setupInput(connect());
