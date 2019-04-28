const fileUtil = require('../util/file-util');
const fileController = {};

fileController.getFile = (req, res) => {
    const queryParams = req.query;
    const currentIndex = parseInt(queryParams.current);
    const offset = parseInt(queryParams.offset);

    fileUtil.getFile(currentIndex, offset)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            console.log('Error', err);
            if (err.statusCode) {
                res.status(err.statusCode);
            }
            res.send(err.msg);
        });
};

fileController.getFileByIndex = (req, res) => {
    const queryParams = req.query;
    const index = parseInt(queryParams.index);

    fileUtil.getFileByIndex(index)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            console.log('Error', err);
            if (err.statusCode) {
                res.status(err.statusCode);
            }
            res.send(err.msg);
        });
};

module.exports = fileController;