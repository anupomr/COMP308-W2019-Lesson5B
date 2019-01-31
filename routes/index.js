let express = require('express');
let router = express.Router();
const session = require('express-session');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/logout', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});
router.get('/feedback', function(req, res, next) {
  res.render('index', { title: 'FeedBack', body:'please Login' });
});
router.post('/', function(req, res, next) {
  res.render('feedback', { title: 'FeedBack' });
});
router.post('/thanku', function(req, res, next) {
  res.render('thankyou', { title: 'ThankYou' });
});

module.exports = router;
