angular.module('examples')
  .controller('UserListCtrl', (users : User[]) => { 
    this.users = users;
    return this;
  });
