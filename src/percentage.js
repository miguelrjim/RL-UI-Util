rlUtil.filter('percentage', 
  function() {
    return function(input) {
      var result = parseInt(input.toString().replace(/[^0-9\.]/g, ''));
      if (result) {
        return result + '%';
      } else {
        return '0%';
      }
    };
  }
)