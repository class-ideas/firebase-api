var firebaseAPI = require('./dist').default;

var users = firebaseAPI('contactz').resource('users');

users.put({name: 'Humanoid', email: 'humane@somethingelse.com', id: '-KEhLJbeFT7yC4WJLNbK'})
  .then(console.log.bind(console)).catch(console.log.bind(console));
