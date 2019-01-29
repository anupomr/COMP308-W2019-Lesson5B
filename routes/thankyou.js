let express = require('express');
let router = express.Router();


router.post('/thankudd', function(req, res, next) {
  res.render('thankyou', { title: 'ThankYou' });
});

module.exports = router;
