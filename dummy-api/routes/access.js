'use strict'

module.exports = function(app){
    var access = require('../controllers/agentAccessList');

app.route('/access/v1/agentcustomeraccess')
    .get(access.get_accessList)
    .post(access.put_accessList)
};