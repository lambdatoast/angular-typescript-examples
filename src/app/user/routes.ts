angular.module('examples').config(($stateProvider : angular.ui.IStateProvider) => { 
  $stateProvider
    .state('user', {
      url: '/users',
      templateUrl: 'app/user/overview.html'
    })
    .state('user.list', {
      url: '/list',
      templateUrl: 'app/user/list.html',
      controller: 'UserListCtrl as userListCtrl',
      resolve: {
        users: (UserStore : UserStore) => {
          return UserStore.all();
        }
      }
    })
    .state('user.create', {
      url: '/create',
      templateUrl: 'app/user/create.html',
      controllerAs: 'ctrl',
      controller: 'UserCreateCtrl'
    });
});

