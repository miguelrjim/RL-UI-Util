rlUtil.factory('tempStorage', 
  function() {
    var dataStore = {};
    return {
      set: function(key, value) {
        dataStore[key] = value;
      },
      get: function(key) {
        var temp = dataStore[key];
        delete dataStore[key];
        return temp;
      }
    };
  }
)