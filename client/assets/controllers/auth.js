app.controller('AuthController', function($scope, userFactory, $window, $location){


  $scope.user = {};

  $scope.signin = function () {
    userFactory.signin($scope.user, function (token) {

      $window.localStorage.setItem('userToken', token);
      $location.path('/auth');
    });  
  };

  $scope.signup = function () {
    userFactory.signup($scope.user, function (token) {

      $window.localStorage.setItem('userToken', token);
      $location.path('/auth');
    });
  };

  
});