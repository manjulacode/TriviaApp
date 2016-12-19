var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'partials/dashboard.html',
    controller: 'dashboardController'
  })
  .when('/play',{
    templateUrl: 'partials/play.html',
    controller: 'playController'
  })
  .when('/addQuestion',{
    templateUrl: 'partials/addQuestion.html',
    controller: 'addQuestionController'
  })
  .otherwise({
    redirectTo: '/'
  })
})