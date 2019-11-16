const getArguments = require("./lib/getArguments");
const makeDeposit = require("./lib/deposit").default;
const withdraw = require("./lib/withdraw");
const showBalance = require("./lib/showBalance");
// console.log(getArguments(process.argv));

const args = getArguments(process.argv);

switch (args[0]) {
  case "deposit":
    makeDeposit(args[1], "record.txt");
    break;
  case "withdraw":
    withdraw(parseFloat(args[1]), "record.txt");
    break;
  case "balance":
    showBalance(total => {
      console.log(total);
    });
    break;
  default:
    console.log("unrecognized input");
    break;
}
