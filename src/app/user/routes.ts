angular.module('examples').config(($stateProvider : angular.ui.IStateProvider) => { 
  $stateProvider
    .state('user', {
      url: '/users',
      templateUrl: 'app/user/home.html'
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
    })
    .state('user.view', {
			url: '/view/:name',
			resolve: {
        user: (UserStore : UserStore, $stateParams : angular.ui.IStateParamsService) => {
					return UserStore.all().then(function (xs: User[]) {
						return xs.filter((u: User) => u.name === $stateParams['name'])[0];
					});
        }
			},
			views: {
			  // no name: inserts template into closest parent ui-view
				'' : {
					templateUrl: 'app/user/view.html',
					controllerAs: 'view',
					controller: 'UserViewCtrl'
				},
				// with name: inserts template into closest parent ui-view that is named 'nav-status'
				// in this case I put it in the index.html
				'nav-status@' : {
					template: 'Currently viewing a user',
					controller: () => {}
				}
			}
    });
});

