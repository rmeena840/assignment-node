import express from "express"
var fs = require('fs');

const router = express.Router();

/* GET /files/:fileName */
router.get('/:fileName', function(req, res, next) {
  var fileURL = './files/readme/' + req.params.fileName;
  fs.readFile(fileURL, {encoding: 'utf-8', 'Content-Type': 'text/html'}, function (err, data) {
    if (!err) {
      const modifiedData = data.replace(/\r?\n|\r/g, "");
      res.send({
        filename: req.params.fileName,
        length: modifiedData.length,
        content: modifiedData
      });
    } else {
        res.status(404);
        res.send({
          "error": "file not found!",
          "code": 404
        });
    }
  });
});

export default router
