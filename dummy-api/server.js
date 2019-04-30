require('dotenv').config()
const express = require('express'),
    app = express(),
    cors = require('cors'),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
const OktaJwtVerifier = require('@okta/jwt-verifier')

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: process.env.ISSUER,
  clientId: process.env.CLIENT_ID
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.options('*', cors()) 
app.use(cors());

//Check the origin of the request
var whitelist = ['http://localhost:8080']
var corsOptionsDelegate = function (req, callback) {
  console.log("called")
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}


//enforce valid token on all requests
app.use(async(req, res, next) => {
  try {
    const { authorization } = req.headers
    if (!authorization) throw(new Error('You must send an Authorization header'))
    const [authType, token] = authorization.split(' ')
    if (authType !== 'Bearer') throw(new Error('Expected a Bearer token'))
    await oktaJwtVerifier.verifyAccessToken(token)
    next();
  } catch (error) {
    next(error)
  }
});

app.use((err, req, res, next) => {
  if(!res.headersSent){
    res.status(500).send(err.message);
  }
});

var profileRoutes = require('./routes/profile');
profileRoutes(app);
var contributionRoutes = require("./routes/contributions")
contributionRoutes(app);
var documentRoutes = require("./routes/documents")
documentRoutes(app);
var transactionsRoutes = require("./routes/transactions")
transactionsRoutes(app);
var wishesRoutes = require("./routes/wishes")
wishesRoutes(app);
var agentAccessList = require("./routes/access")
agentAccessList(app);


//Handle error codes
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' was not found'})
});

app.listen(port, () => console.log(`Dummy API listening on port ${port}`))