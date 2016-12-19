app.factory('triviaFactory', function ($http, $location, $window) {
  var factory = {};
  
  factory.index = function(callback){
      //call this method if you want to update or set the friends variable
    console.log('index ')
    $http.get('/score').then(function(data){
      console.log('user trivia results ', data);
      if (data) {
        score = data.data.result;
        var percentage = (score.score / 3) * 100;
        console.log(percentage);
        score.percentage = percentage;
        callback(score);
      }
    });
 //Note: this can be shortened to $http.get('/friends').then(callback); 
 //But only if you only want to run the callback from the controller.
  };
  factory.addUser = function(name, callback) {
    console.log('factory:', name)
    $http.post('/add', name).then(function(returned_data) {
      console.log('login success',returned_data)
      callback(returned_data.data.result)
    })
  }

  factory.getQuestions = function(name, callback) {
    console.log('factory:', name)
    $http.get('/play').then(function(returned_data) {
      console.log('play ',returned_data)
      callback(returned_data.data)
    })
  }
  
  factory.addQuestion = function(question, callback) {
    console.log('factory: add question', question)
    $http.post('/addQuestion', question).then(function(returned_data) {
      console.log('question added success',returned_data)
      callback(returned_data.data.result)
    })
  }

  factory.submitScore = function(user, callback) {
    console.log('factory: submit score', user)
    $http.post('/score', user).then(function(returned_data) {
      console.log('score submit success',returned_data)
      callback(returned_data.data.result)
    })
  }

  return factory;
  
});