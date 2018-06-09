/*****
 * Sample server application callign FDA open API 
 */

var express = require('express');
var app = express();
var ndb = require('nutrient-database');
var fetchUrl = require("fetch").fetchUrl;

const ndbno = '01009';
const apiKey = '';
var url = "https://api.nal.usda.gov/ndb/V2/reports?ndbno="+ndbno+"&api_key="+apiKey;
 
// Parameters:
// 1. ndb no
// 2. API Key
ndb.foodReport('01009', apiKey, function(err, response){
    console.log(JSON.stringify(response));
});

// app.get('/', function(req, res) {
//     fetchUrl(url, function(error, meta, body){
//         console.log(body);
//         next();
//     });
// })

console.log('...listening to http://localhost:3005')
app.listen(3005);