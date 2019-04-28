var express = require('express');
var router = express.Router();
const renamingController = require('../lib/controllers/rename-controller');
const fileController = require('../lib/controllers/file-controller');

router.post('/rename', renamingController.rename);
router.get('/file', fileController.getFile);
router.get('/fileByIndex', fileController.getFileByIndex);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
