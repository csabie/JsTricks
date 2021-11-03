// for servers
var module1 = require("module1"); //fight
//var fightExport = require('module1').fight

var module2 = require("module2"); //imported function

function fight() {}

module.export = {
  fight: fight,
};
