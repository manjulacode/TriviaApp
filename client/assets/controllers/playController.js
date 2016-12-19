app.controller('playController', function($scope, triviaFactory, $routeParams, $location){
  $scope.name = $location.search().name
  triviaFactory.getQuestions($scope.name, function(data) {
    console.log('data play controller', data.result);
    $scope.list = data.result;
    console.log($scope.list[0].question)
  })
  //$scope.list.answer = $scope.list.response
  //console.log($scope.list.response)  
  $scope.cancel = function() {
    $location.url('/');
  }
  $scope.submit = function() {
    console.log($scope.list.response)
    var score = 0;
    if ($scope.list[0].answer === $scope.list.response[0] )
        score++;
    if ($scope.list[1].answer === $scope.list.response[1] )
        score++;
    if ($scope.list[2].answer === $scope.list.response[2] )
        score++;
    var user = {}
    user.name = $scope.name;
    user.score = score;
    triviaFactory.submitScore(user, function(data) {
      console.log('result play controller', data.result);
    })
    console.log(score)
    $location.url('/?score='+score);
  }  
});
    