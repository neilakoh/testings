import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import { User } from '../lib/methods.js';
import { Register } from '../lib/methods.js';
// import { Class } from 'meteor/jagi:astronomy';

Template.register.helpers({

});

Template.register.events({

});

// const User = Class.create({
//   name: 'User',
//   collection: Meteor.users,
//   fields: {
//     username: String,
//     services: Object,
//     emails: [Object]
//   },
//   events: {
//     beforeSave(e) {
//       if(Meteor.isServer) {
//         var id = e.target._id;
//         var pass = e.target.password;
//         console.log(id);
//         console.log(pass);
//         //Accounts.setPassword(id, pass);
//       }
//     }
//   }
// });

var users = new User();
users.set("username","neil4");
users.set({"services": {"password": {"bcrypt":"123456"}}});
users.set("emails", [{"address":"neil4@test.com"}])
console.log(users);
users.save();






// users.username = "nagatron";
// users.password = "123456";
// users.emails = ["email@test.com"];
// users.save();
// users.services = {};
// users.createdAt = new Date();
// console.log(users.saveUser());

// var signup = new Register();
// signup.username = '12345678';
// signup.save();

// var signup = new Register();
// signup.set('username', '12345678');
// signup.username = '12345678';
// signup.save(function(err) {
//   if(err) {
//     console.log(err);
//   }
//   console.log('record created');
// });

// signup.validate(function(err) {
//   if(err) {
//     console.log(err.reason);
//   }
//
//   if(!err) {
//     signup.save(function(err) {
//       if(!err) {
//         console.log('record created');
//       }
//     });
//   }
// });

// var user = new User();
// user.firstName = 'John ';
// user.lastName = 'Smith';
//
// user.validate(function(err) {
//   if(err) {
//     console.log(err.reason);
//   }
//
//   if(!err) {
//     console.log(user.fullName());
//   }
// });
