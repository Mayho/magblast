angular.module('app', [
  'ionic',
  'app.main'
])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: '',
    abstract: true,
    template: '<ion-nav-view />'
  });

  $urlRouterProvider.otherwise('/main');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default
    // remove this to show the accessory bar above the keyboard for form inputs
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      window.StatusBar.styleDefault();
    }
  });
});