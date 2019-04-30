'use strict';
const fs = require('fs');

let temp = null;

exports.get_accessList = function(req,res){
  if(temp != null){
    res.json(temp);
  }
  else {
    let rawdata = fs.readFileSync('./controllers/data/accessList.json');  
    res.json(JSON.parse(rawdata))
  }
}

exports.put_accessList = function(req,res){
  temp = req.body;
  res.sendStatus(200);
}