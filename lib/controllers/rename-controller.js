const renameUtil = require('../util/rename-util');
const renamingController = {};

renamingController.rename = (req, res) => {
    const body = req.body;
    const oldName = body.oldName;
    const newName = body.newName;
    renameUtil.rename(oldName, newName)
        .then(() => {
            console.log('Renaming complete!');
            res.statusCode(204).end();
        })
        .catch((err) => {
            console.log('Error', err);
        });
};

module.exports = renamingController;