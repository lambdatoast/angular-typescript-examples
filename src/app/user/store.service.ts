interface UserStore {
  all : () => angular.IHttpPromise<User[]>
}

angular.module('examples')
  .factory('UserStore', ($http : angular.IHttpService) => {
    var url = 'http://localhost:3000/users';

    function data<T>(r : { data: T }) : T {
      return r.data;
    }

    function all() {
      return $http.get<User>(url).then(data);
    }

    return {
      all: all
    }
  });
