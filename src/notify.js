rlUtil.factory('notify', 
  function() {
    var currentNotify;

    function prepSettings(message, type, settings) {
      settings = settings || {};
      return {
        message: message || 'An error occured.',
        type: type || 'error',
        layout: settings.layout || 'attached',
        effect: settings.effect || 'bouncyflip',
        ttl: settings.ttl || 3000,
      };
    }

    function launchNotify(message, type, settings) {
      if (currentNotify) {
        currentNotify.dismiss();
      }
      currentNotify = new NotificationFx(prepSettings(message, type, settings));
      return currentNotify.show();
    }
    return {
      success: function(message, settings) {
        return launchNotify(message, 'success', settings);
      },
      error: function(message, settings) {
        return launchNotify(message, 'error', settings);
      }
    };
  }
]);