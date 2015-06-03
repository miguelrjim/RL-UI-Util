rlUtil.factory('patternService', ['$location', '$q',
  function($location, $q) {
    return {
      rocketCode: /^[a-zA-Z0-9_-]*$/,
      rocketCodeError: 'Please enter only A-Z, 0-9, - or _',
      rocketDate: /^(0[1-9]|[1-9]|1[0-2])\/(0[1-9]|[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/,
      rocketDateError: 'Please enter a valid date (mm/dd/yyyy).'
    };
  }
])