var dadjokes = angular.module('dadjokes', ['ngRoute','appControllers']);

var appControllers = angular.module('appControllers',[]);

dadjokes.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/login',{
      templateUrl: 'views/login.html'
    }).
    when('/register',{
      templateUrl: 'views/register.html'
    }).
    when('/jokes',{
      templateUrl: 'views/jokes.html'
    }).
    otherwise({
      redirectTo: '/login'
    });

}]);
