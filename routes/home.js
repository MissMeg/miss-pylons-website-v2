const express     = require('express');
const router      = express.Router();

//Get routes for each page
router.get('/', (req, res) => {
  res.render('index', {title: 'Miss_Pylons', currentUser: false});
});

module.exports = router;
