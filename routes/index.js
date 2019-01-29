let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});
router.post('/', function(req, res, next) {
  res.render('feedback', { title: 'FeedBack' });
});
router.post('/thanku', function(req, res, next) {
  res.render('thankyou', { title: 'ThankYou' });
});

module.exports = router;
