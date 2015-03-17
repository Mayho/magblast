angular.module('app.main', [
  'ionic'
])

.config(function($stateProvider) {
  $stateProvider
  .state('main', {
    url: '/main',
    templateUrl: 'app/main/main.tpl.html',
    controller: 'MainCtrl'
  });
})

.controller('MainCtrl', function() {
  console.log('MainCtrl');
});