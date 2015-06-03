rlUtil.factory('serviceUtil', ['$location', '$q', 
  function($location, $q) {
    var host = $location.host();
    if (host === 'localhost') {
      host = 'localhost:9292/cms5.dev.rocketlawyer.com';
      // for local endpoints
      // host = "localhost:9292/localhost:8080/";
    }
    return {
      serviceBase: $location.protocol() + '://' + host + '/catalog-admin/',
      taxonomyBase: $location.protocol() + '://' + host + '/lighthouse/cmstaxonomy/v1/',
      taxonomyUUID: '1d150cc9-7749-40ea-82d5-3b1ed3fc5981',
      taxonomyName: 'Products',
      successFilter: function(result) {
        result = result.data;
        if ((result.success)) {
          if (!result.data && !result.message) {
            return [];
          } else if (result.message) {
            return result;
          }
          return result.data;
        }
        return $q.reject(result.message);
      },
      errorFilter: function(error) {
        return error;
      }
    };
  }
])