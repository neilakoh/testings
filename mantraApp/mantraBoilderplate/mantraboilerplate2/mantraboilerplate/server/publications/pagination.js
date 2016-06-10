import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('paginationList', function (limit, previousPageLimit) {
    check(limit, Number);
    check(previousPageLimit, Number);
    return Meteor.users.find({}, {skip: previousPageLimit, limit: limit});
  });
}
