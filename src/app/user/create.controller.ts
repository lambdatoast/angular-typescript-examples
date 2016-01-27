angular.module('examples')
  .controller('UserCreateCtrl', (UserStore : UserStore, $state : angular.ui.IStateService) => {
    function validate(u : User) {
      return u.name !== '' && Number(u.age) === Number(u.age);
    }
    var user : User = { name: '', age: 0};
    return {
      user : user,
      create : function () {
        if (validate(this.user)) {
          UserStore.create(this.user)
            .then(function (r : any) {
              console.log('created', r);
              $state.go('user.list');
            });
        } else {
          console.log('invalid');
        }
      }
    }
  });
