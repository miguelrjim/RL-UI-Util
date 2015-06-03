// Directive for autoNumeric.js
rlUtil.directive('rlCurrency', 
  function() {
    var options = {};
    return {
      require: '?ngModel',
      restrict: 'A',
      link: function(scope, element, attrs, controller) {
        var isTextInput = $(element).is('input:text');

        var opts = angular.extend({}, options, scope.$eval(attrs.crNumeric));
        opts.aSign = '$';
        $(element).autoNumeric(opts);

        var lastVal = null;

        if (controller && isTextInput) {
          // watch for external changes to model and re-render element
          scope.$watch(attrs.ngModel, function(current, old, controller) {
            var currVal = current ? current : null;
            $(element).autoNumeric('set', currVal);
            $(element).trigger('input');
            $(element).change();

            if (currVal) {
              lastVal = '$' + currVal.toFixed(2).toString();
            }
          });
          element.on('mouseup', function(e){
            var selStart = element[0].selectionStart;
            var selEnd = element[0].selectionEnd;
            if(selStart == 0 && selEnd == 0){
              element[0].selectionStart =1;
              element[0].selectionEnd =1;
            }
          });
          element.on('keydown, focus' , function(e) {
            var thisVal = $(this).val();

            $(this).removeClass('.ng-pristine');

            var selStart = element[0].selectionStart;
            var selEnd = element[0].selectionEnd;

            var key = event.keyCode || event.charCode;
            console.log(selStart);
            console.log(selEnd);
            
            if (lastVal) {
              var freeLastVal = lastVal.replace('$', '').replace(',', '');
              var freeThisVal = thisVal.replace('$', '').replace(',', '');

              var commaCount = thisVal.match(/\$|,/g).length || 0;

              if (selStart == selEnd && selStart == lastVal.replace('$', '').indexOf('.') + commaCount && key == 8 || key == 46) {

                if (freeThisVal.length == freeLastVal.length - 1 && (freeLastVal.indexOf('.') > -1 && freeThisVal.indexOf('.') == -1)) {

                  thisVal = lastVal;

                  $(this).val(thisVal);

                  var offset = thisVal.length - thisVal.indexOf('.');
                  
                  element[0].selectionStart = thisVal.length - offset;
                  element[0].selectionEnd = thisVal.length - offset;
                }
              }
            }
            lastVal = thisVal == '$0.' ? null : thisVal;
          });

          controller.$parsers.unshift(function(value) {
            var isValid = value !== "" && value !== '$' && value !== '$0.';

            controller.$setValidity("required", isValid);

            if (!isValid) {
              return undefined;
            }
            if (typeof(value) == 'string') {
              return parseFloat(value.replace('$', '').replace(',', ''));;
            }
          });

          controller.$formatters.unshift(function(value) {
            var isValid = value !== "" && !isNaN(value);
            controller.$valid = isValid;

            if (typeof(value) == 'number' && isValid) {
              return value;
            } else {
              return '';
            }
          });

        }
      }
    } // return
  }
)