angular.module('examples')
  .controller('UserViewCtrl', (user : User) => { 
    return {
      user: user
    };
  });

