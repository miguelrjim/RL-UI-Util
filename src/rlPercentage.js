rlUtil.directive('rlPercentage', ['$filter',
  function($filter) {
    return {
      require: 'ngModel',
      restrict: 'A',
      priority: 1000,
      link: function(scope, element, attrs, modelCtrl) {
        function listener() {
          var start = element[0].selectionStart;
          var end = element[0].selectionEnd;
          var val = parseInt(element.val().replace(/[^0-9\.]/g, '').replace(/%/g, '')) || 0;
          val > 0 ? element.val(val + '%') : element.val('');
          element[0].selectionStart = start;
          element[0].selectionEnd = end;
        }

        modelCtrl.$parsers.unshift(function(viewValue) {
          return viewValue.replace(/%/g, '');
        });
        modelCtrl.$render = function() {
          if (modelCtrl.$viewValue)
            element.val($filter('percentage')(modelCtrl.$viewValue, false));
        };
        modelCtrl.$viewChangeListeners.push(listener);
        element.bind('keyup keydown mousedown blur', listener());
      }
    }
  }
])