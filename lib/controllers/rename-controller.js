const renameUtil = require('../util/rename-util');
const renamingController = {};

renamingController.rename = (req, res) => {
    const body = req.body;
    const oldName = body.oldName;
    const newName = body.newName;
    renameUtil.rename(oldName, newName)
        .then(() => {
            console.log('Renaming complete!');
            res.status(204).send();
        })
        .catch((err) => {
            console.log('Error', err);
            if (err.statusCode) {
                res.status(err.statusCode);
            }
            res.send(err.msg);
        });
};

module.exports = renamingController;