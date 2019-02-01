let express = require('express');
let router = express.Router();

//const session = require('express-session');
/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.render('index', { title: 'Home'});
});
router.get('/logout', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
})
router.get('/login', function(req, res, next) {
  
  res.render('login', { title: 'Login' });
});
router.get('/feedback', function(req, res, next) {
  res.render('index', { title: 'FeedBack', body:'please Login' });
});
router.post('/', function(req, res, next) {
  req.session.email=req.body.username;
  console.log()
  res.render('feedback', { title: 'FeedBack', Email:req.session.email});
});
router.post('/thanku', function(req, res, next) {
  //req.session.email="Anupom@gmail";
  req.session.email=req.body.txtEmail;
  res.render('thankyou', { Email:req.session.email});
});

module.exports = router;
