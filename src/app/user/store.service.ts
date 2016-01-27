interface UserStore {
  all : () => angular.IHttpPromise<User[]>
  create : (u: User) => angular.IHttpPromise<User>
}

angular.module('examples')
  .factory('UserStore', ($http : angular.IHttpService) => {
	var url = 'http://192.168.50.5:3000/users';

    function data<T>(r : { data: T }) : T {
      return r.data;
    }

    function all() {
      return $http.get<User>(url).then(data);
    }

    function create(u: User) {
      return $http.post<User>(url, u).then(data);
    }

    return {
      all: all,
      create: create
    }
  });
