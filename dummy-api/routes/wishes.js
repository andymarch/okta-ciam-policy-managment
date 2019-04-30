'use strict'

module.exports = function(app){
    var wishes = require('../controllers/wishes');

app.route('/eow/v1/expressionofwishes/')
    .get(wishes.get_wishes)
    .post(wishes.put_wishes)
};