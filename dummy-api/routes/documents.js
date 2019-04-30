'use strict'

module.exports = function(app){
    var documents = require('../controllers/documents');

app.route('/docs/v1/documents')
    .get(documents.get_documents);
};