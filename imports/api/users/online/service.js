import { Meteor } from 'meteor/meteor';

import Users from '/imports/api/users/Users';

Meteor.methods({
  'users.online.get'() {
    const users = Users.find({
      'status.online': true
    }, {
      fields: {
        username: 1,
        'profile.firstname': 1,
        'profile.lastname': 1,
        'status.online': 1,
        'status.idle': 1
      }
    })
    .fetch()
    .filter((user) => {
      return user.username != 'adm';
    })
    .map((user, index) => {
      return {
        _id: user._id,
        user: `${index + 1}: ${user.profile.firstname} ${user.profile.lastname} (${user.username})`,
        isIdle: user.status.idle
      };
    });

    return {
      onlineUsers: users.filter((user) => !user.isIdle),
      idleUsers: users.filter((user) => user.isIdle)
    };
  }
});
