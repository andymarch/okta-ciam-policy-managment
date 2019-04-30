'use strict';
const fs = require('fs');


exports.get_documents = function(req,res){
  let rawdata = fs.readFileSync('./controllers/data/documents.json');  
  res.json(JSON.parse(rawdata))
}