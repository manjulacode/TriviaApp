app.controller('dashboardController', function($scope, triviaFactory, $window, $routeParams, $location){
    
  $scope.name = $window.localStorage.getItem('userName');

  if ($location.search().score !== undefined) {
    $scope.message = ', your score is ' + $location.search().score + '/3.'
  }
  if ($scope.name === undefined || $scope.name === null) {
    $scope.name = prompt('enter your name');
    $window.localStorage.setItem('userName', $scope.name);
    triviaFactory.addUser({name: $scope.name}, function(data) {
        console.log('new user response',data);  
    })
  }

  triviaFactory.index( function(data) {
    $scope.list = data;
    console.log('data ',    data)
  })

  $scope.play = function() {
    console.log('play controller ', $scope.name)
    $location.url("/play?name="+$scope.name);   
  }
  
  $scope.addQuestion = function() {
    console.log('add a question');
    $location.url("/addQuestion");
  } 

  $scope.logout = function() {
    $window.localStorage.removeItem('userName');
  }             
});
