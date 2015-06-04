rlUtil.factory('serviceUtil', ['$location', '$q', 
  function($location, $q) {
    return {
      serviceBase: '/catalog-admin/',
      taxonomyBase: '/lighthouse/cmstaxonomy/v1/',
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