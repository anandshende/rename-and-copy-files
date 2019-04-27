var express = require('express');
var router = express.Router();
const renamingController = require('../lib/controllers/rename-controller');

router.post('/rename', renamingController.rename);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
