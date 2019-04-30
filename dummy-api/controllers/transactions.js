'use strict';
const fs = require('fs');

exports.get_transactions = function(req,res){
  let rawdata = fs.readFileSync('./controllers/data/transactions.json');  
  res.json(JSON.parse(rawdata))
}