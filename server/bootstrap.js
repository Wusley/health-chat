import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(function() {
  if (Meteor.users.find().count() != 0) return;

  Accounts.createUser({
    email: 'wesley@gmail.com',
    password: '123456',
    phone: '+5511984732295',
    profile: {
      name: 'Wesley'
    }
  });

  Accounts.createUser({
    email: 'amigo-2@gmail.com',
    password: '654321',
    phone: '+5511987846722',
    profile: {
      name: 'Ana'
    }
  });

  Accounts.createUser({
    email: 'amigo-3@gmail.com',
    password: '990990',
    phone: '+5511224987685',
    profile: {
      name: 'Aline'
    }
  });

  Accounts.createUser({
    email: 'amigo-4@gmail.com',
    password: '6763672',
    phone: '+5511974590968',
    profile: {
      name: 'Jonas'
    }
  });
});