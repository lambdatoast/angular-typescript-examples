angular.module('examples')
  .controller('UserListCtrl', (users : User[]) => { 
    return {
      users: users
    };
  });
