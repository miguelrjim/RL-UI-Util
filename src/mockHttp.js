rlUtil.factory('mockHttp', ['$q',
  function($q) {
    return function(response) {
      var deferred = $q.defer();
      setTimeout(function() {
        deferred.resolve(response);˜
      }, Math.floor(Math.random() * 2000));
      return deferred.promise;
    };
  }
])