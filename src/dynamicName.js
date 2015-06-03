rlUtil.directive('dynamicName', ['$compile', '$interpolate', 
  function($compile, $interpolate) {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        var name = $interpolate(elem.attr('dynamic-name'))(scope);
        elem.removeAttr('dynamic-name');
        elem.attr('name', name);
        $compile(elem)(scope);
      }
    };
  }
])