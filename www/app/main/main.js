angular.module('app.main', [])

.config(function($stateProvider) {
  $stateProvider
  .state('main', {
    url: '/main',
    templateUrl: 'app/main/main.tpl.html',
    controller: 'MainCtrl',
    onEnter: function() {
      console.log('Enter Main State');
    },
    onExit: function() {
      console.log('Leave Main State');
    }
  });
})

.controller('MainCtrl', function() {

});