import { Class } from 'meteor/jagi:astronomy';

const Posts = new Mongo.Collection('posts');
// const Post = Class.create({
//   name: 'User',
//   collection: Posts,
// });
// var post = new Post();
// post.save();

// export const User = Class.create({
//   name: 'User',
//   fields: {
//     firstName: String,
//     lastName: String
//   }
// });

// export const User = Class.create({
//   name: 'User',
//   fields: {
//     firstName: String,
//     lastName: String
//   },
//   methods: {
//     fullName(param) {
//       var fullName = this.firstName + ' ' + this.lastName;
//       return fullName;
//     }
//   }
// });

// export const Register = Class.create({
//   name: 'Register',
//   fields: {
//     username: String,
//     password: String,
//     email: String
//   },
//   methods: {
//     validateUser(param) {
//       var validateUser = this.username;
//       return validateUser;
//     },
//
//     validatePassword() {
//
//     },
//
//     validateEmail() {
//
//     }
//   }
// });

// export const Register = Class.create({
//   name: 'Register',
//   collection: Posts,
//   fields: {
//     username: {
//       type: String,
//       validators: [{
//         type: 'minLength',
//         param: 3,
//         resolveError({ name, param }) {
//           return `Length of "${name}" has to be at least ${param}`;
//         }
//       }, {
//         type: 'maxLength',
//         param: 8,
//         resolveError({ name, param }) {
//           return `Length of "${name}" has to be less than or equal to ${param}`;
//         }
//       }]
//     }
//   }
// });

// export const User = Class.create({
//   name: 'Register',
//   collection: Meteor.users,
//   fields: {
//     username: String,
//     password: String,
//     email: String
//   },
//   methods: {
//     saveUser(param) {
//       Accounts.createUser({
//         username: this.username,
//         email: this.email,
//         password: this.password
//       }, function (err) {
//         if(err) {
//           console.log(err);
//         } else {
//           console.log('success');
//         }
//       });
//     }
//   }
// });

// export const User = Class.create({
//   name: 'User',
//   collection: Meteor.users,
//   fields: {
//     username: String,
//     services: Object,
//       password: Object,
//         bcrypt: String,
//       // resume: Object,
//       //   loginTokens: [String],
//     emails: [String],
//       address: [String]
//   }
// });


export const User = Class.create({
  name: 'User',
  collection: Meteor.users,
  fields: {
    username: String,
    services: Object,
    emails: [Object]
  },
  events: {
    afterSave(e) {
      console.log(e);
      if(Meteor.isServer) {
        var id = e.target._id;
        var pass = e.target.services.password.bcrypt;
        console.log(id);
        console.log(pass);
        Accounts.setPassword(id, pass);
      }
    }
  }
});
