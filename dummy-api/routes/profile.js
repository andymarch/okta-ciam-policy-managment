'use strict'

module.exports = function(app){
    var profile = require('../controllers/profile');
    var agentProfile = require('../controllers/agentProfile');

app.route('/profile/v1/customer')
    .get(profile.get_profile);
app.route('/profile/v1/agent')
    .get(agentProfile.get_profile);
};