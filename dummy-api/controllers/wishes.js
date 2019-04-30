'use strict';
const fs = require('fs');

let temp = null;

exports.get_wishes = function(req,res){
  if(temp != null){
    res.json(temp);
  }
  else {
    let rawdata = fs.readFileSync('./controllers/data/wishes.json');  
    res.json(JSON.parse(rawdata))
  }
}

exports.put_wishes = function(req,res){
  temp = req.body;
  res.sendStatus(200);
}