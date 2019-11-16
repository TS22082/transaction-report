const fs = require("fs");

makeDeposit = (num1, file) => {
  fs.appendFile(file, num1 + "\n", err => {
    if (err) throw err;
  });
};

module.exports = makeDeposit;
