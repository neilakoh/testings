import { Meteor } from 'meteor/meteor';
import inapp2 from "./../imports/startup/server/iap.js";

Meteor.startup(() => {
  console.log(inapp2());
});
