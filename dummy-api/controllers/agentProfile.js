'use strict';
const fs = require('fs');


exports.get_profile = function(req,res){
  let rawdata = fs.readFileSync('./controllers/data/agentProfile.json');  
  res.json(JSON.parse(rawdata))
}