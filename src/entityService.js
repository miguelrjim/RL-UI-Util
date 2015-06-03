rlUtil.factory('entityService', 
  function() {
    return {
      getEntities: function() {
        var entityList = new Array('llc', 'scorp', 'ccorp', 'nonprofit')
        return entityList;
      }
    }
  }
)