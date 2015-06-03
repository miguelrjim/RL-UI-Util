rlUtil.directive('collapseToggle', 
  function() {
    return {
      require: 'ngModel',
      restrict: 'A',
      scope: {},
      template: "<span class='expand-toggle'><span class='collapse-icon'></span>{{ngModel.$modelValue ?'Expand':'Collapse'}}<span>",
      link: function(scope, element, attrs, ngModel) {
        scope.ngModel = ngModel;
        scope.$watch('ngModel.$modelValue', function(value) {
          if (value) {
            element.children().children().first().removeClass('fi-minus');
            element.children().children().first().addClass('fi-plus');
          } else {
            element.children().children().first().addClass('fi-minus');
            element.children().children().first().removeClass('fi-plus');
          }
        });
      }
    };
  }
)