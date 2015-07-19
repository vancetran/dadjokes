var dadjokes = angular.module('dadjokes', ['ngRoute','appControllers']);

var appControllers = angular.module('appControllers',[]);

dadjokes.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/login',{
      templateUrl: 'views/login.html'
    })
}]);
