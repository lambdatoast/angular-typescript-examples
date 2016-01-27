interface UserStore {
  all : () => angular.IHttpPromise<User[]>
}

angular.module('examples')
  .factory('UserStore', ($http : angular.IHttpService) => {
    var url = 'http://localhost:3000/users';

    function all() {
      return $http.get<User>(url);
    }

    return {
      all: all
    }
  });
