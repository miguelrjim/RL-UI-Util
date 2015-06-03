rlUtil.factory('timeSpanService', ['$http', 'serviceUtil', 
  function($http, serviceUtil) {
    return {
      getTimeUnits: function() {
        var obj = [{
          name: 'Days',
          unit: 'DAY',
          amount: 1
        }, {
          name: 'Weeks',
          unit: 'DAY',
          amount: 7
        }, {
          name: 'Months',
          unit: 'MONTH',
          amount: 1
        }, {
          name: 'Years',
          unit: 'YEAR',
          amount: 1
        }, ];
        return obj;
      },
      getTimeSpans: function() {
        return $http.get(serviceUtil.serviceBase + 'time-spans/').then(serviceUtil.successFilter).then(function(r) {
          return r;
        });
      }
    }
  }
])