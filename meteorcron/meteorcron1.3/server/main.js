import { Meteor } from 'meteor/meteor';

var google = Meteor.npmRequire('googleapis');
var request = Meteor.npmRequire('request');

var scopes = [
  "https://www.googleapis.com/auth/androidpublisher"
];

var key = require("./jwt/dev/Rometic-b40775933819.json");
var client = new google.auth.JWT(key.client_email, null, key.private_key, scopes, null);
//var android = google.androidpublisher({version: 'v2', auth: client});
// console.log(google.GoogleApis.BASE_DISCOVERY_URL_);

request('https://www.googleapis.com/discovery/v1/apis/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //var android = body.id({version: 'v2', auth: client});
    console.log(body.items);
  }
});


Meteor.startup(() => {

});
