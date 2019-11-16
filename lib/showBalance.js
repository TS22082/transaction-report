const fs = require("fs");

showBalance = cb => {
  fs.readFile("record.txt", "utf8", (err, data) => {
    if (err) throw err;
    let total = 0;
    let transactionReport = data.split("\n");

    transactionReport.pop();
    transactionReport.forEach(tranaction => {
      total += parseFloat(tranaction);
    });

    cb(total);
  });
};

module.exports = showBalance;
