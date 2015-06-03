rlUtil.directive('doubleDefocus', ['$compile', '$interpolate', 
  function($compile, $interpolate) {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        elem.click(function(e) {
          if ($(this).siblings().css('display') == 'none') {
            $(this).blur();
          }
        });
      }
    };
  }
])