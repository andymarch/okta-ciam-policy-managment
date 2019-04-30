'use strict'

module.exports = function(app){
    var transactions = require('../controllers/transactions');

app.route('/transaction/v1/transactions')
    .get(transactions.get_transactions);
};