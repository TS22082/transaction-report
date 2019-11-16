const fs = require("fs");

withdraw = (num1, file) => {
  fs.appendFile(file, -Math.abs(num1) + "\n", err => {
    if (err) throw err;
    console.log("Withdraw succesfull");
  });
};

module.exports = withdraw;
