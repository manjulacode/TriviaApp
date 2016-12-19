var trivia = require('../controllers/trivia.js')
module.exports = function(app){
  app.get('/score', trivia.getScore);
  app.get('/play', trivia.getTrivia);
  app.post('/add', trivia.addUser);
  app.post('/addQuestion', trivia.addQuestion);
  app.post('/score', trivia.saveScore);
}