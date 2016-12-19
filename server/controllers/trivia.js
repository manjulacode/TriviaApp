var mongoose = require('mongoose');
var User = mongoose.model('User');
var Trivia = mongoose.model('Trivia');
var jwt = require('jwt-simple');

function TriviaController(){
  var secret = 'saltForPassword';
  // get score
  this.getScore = function(req, res) {
    console.log('getscore ')
    User.find({}, function(err, data) {
      console.log('user score controller ', data)
      res.json({result:data});
    })
  } 

  this.getTrivia = function(req, res) {
    console.log('gettrivia ',req.body)
    Trivia.find({}, function(err, data) {
      console.log('get trivia controller ', data)
      res.json({result:data});
    })
  } 

  this.addQuestion = function(req, res) {
    console.log('addquestion ',req.body)
    var newQuestion = new Trivia();
    newQuestion.question = req.body.question;
    newQuestion.answer = req.body.answer;
    newQuestion.fake1 = req.body.fake1;
    newQuestion.fake2 = req.body.fake2;
    console.log('create ')
    newQuestion.save(function(err, doc) {
      if (err) {
        console.log('error', err);
      }
      res.json({result: doc});
    })
    
  };
  


  this.addUser = function(req, res) {

    console.log('adduser ', req.body)
    var username = req.body.name;
    
    User.findOne({name:username}, function(err, data) {
      if (data) {
        console.log('User  found!', data);
        res.json({result: data});

      } else {
        // make a new user if not one
        console.log('make a new one')
        var newUser = new User();
        newUser.name= username;
        newUser.save(function(err, doc) {
          if (err) {
            console.log('error',err);
          }
          res.json({result: doc});
            
        })
            
      }
    })
  } 

  this.saveScore = function(req, res) {

    console.log('score for user ', req.body)
    var username = req.body.name;
    var score = req.body.score;
    
    User.findOne({name:username}, function(err, data) {
      if (data) {
        console.log('User  found!', data);
        data.score = score;
        data.name = username;
        data.save(function(err, doc) {
          if (err) {
            console.log('error',err);
          }
          res.json({result: doc});
            
        })


      } 
    })
  } 

}


  
module.exports = new TriviaController();