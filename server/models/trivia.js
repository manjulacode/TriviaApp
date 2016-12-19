// require mongoose
var mongoose = require('mongoose');

// create the schema



var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  score: {
    type: Number
  }

});

var TriviaSchema = new mongoose.Schema({
  question: {
  	type: String,
  	required: true
  },
  answer: {
  	type: String,
  	required: true
  },
  fake1: {
    type: String,
    required: true
  },
  fake2: {
    type: String,
    required: true
  }
},
{
  	timestamps: true  

})

module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('Trivia', TriviaSchema);

// register the schema as a model