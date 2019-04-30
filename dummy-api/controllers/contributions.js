'use strict';
const fs = require('fs');

let temp = null;

exports.get_contributions = function(req,res){
  if(temp != null){
    res.json(temp);
  }
  else {
    let rawdata = fs.readFileSync('./controllers/data/contributions.json');  
    res.json(JSON.parse(rawdata))
  }
}

exports.put_contributions = function(req,res){
  temp = req.body;
  res.sendStatus(200);
}