rlUtil.service('dataService', ['$http', 'notify', 
  function($http, notify) {
    this.getData = function(url, callbackFunc) {
      $http({
        method: 'GET',
        url: url,
        params: ''
          // headers: {
          //   'Authorization': 'Token token=xxxxYYYYZzzz'
          // }
      }).success(function(data) {
        callbackFunc(data);
      }).error(function() {
        notify.error('Unable to contact server.');
      });
    };
  }
])