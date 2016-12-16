var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'partials/signin.html',
        controller: 'AuthController'
    })
    .when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'AuthController'
    })
    
    .otherwise({
        redirectTo: '/auth'
    })
})