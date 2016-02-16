var homeHtml = require('./home.html');
var listHtml = require('./list.html');
var createHtml = require('./create.html');
var viewHtml = require('./view.html');
// templates required here so that webpack loaders act before angular boots.

export = function ($stateProvider : angular.ui.IStateProvider) { 
  $stateProvider
    .state('user', {
      url: '/users',
      templateUrl: homeHtml
    })
    .state('user.list', {
      url: '/list',
      templateUrl: listHtml,
      controller: 'UserListCtrl as userListCtrl',
      resolve: {
        users: (UserStore : UserStore) => {
          return UserStore.all();
        }
      }
    })
    .state('user.create', {
      url: '/create',
      templateUrl: createHtml,
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
					templateUrl: viewHtml,
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
}

