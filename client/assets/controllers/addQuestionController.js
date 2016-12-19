app.controller('addQuestionController', function($scope, triviaFactory, $routeParams, $location){
  $scope.addQuestion = function() {
    console.log('form data:', $scope.list)
    triviaFactory.addQuestion($scope.list, function(data) {
      console.log('added successfully',data)
      $location.url("/");
    })
  }
  $scope.cancel = function() {
    console.log('cancel')
    $location.url("/");
  }
});