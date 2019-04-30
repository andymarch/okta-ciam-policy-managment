'use strict'

module.exports = function(app){
    var contributions = require('../controllers/contributions');

app.route('/contribution/v1/contributions')
    .get(contributions.get_contributions)
    .put(contributions.put_contributions)
};