const fs = require('fs');
const { COPYFILE_EXCL } = fs.constants;
const path = require('path');

const renameUtil = {};

renameUtil.rename = (oldName, newName) => {
    return new Promise((resolve, reject) => {
        const oldPath = path.join(config.sourcePath, oldName);
        const srcPath = path.join(config.sourcePath, newName);
        const destPath = path.join(config.destinationPath, newName);

        fs.rename(oldPath, srcPath, (err) => {
            if (err) reject({ msg: err, statusCode: 501 });
            fs.copyFile(srcPath, destPath, COPYFILE_EXCL, (err) => {
                if (err) reject({ msg: err, statusCode: 501 });
                fs.unlink(srcPath, (err) => {
                    if (err) reject({ msg: err, statusCode: 501 });
                    resolve();
                });
            });
        });
    });
};

module.exports = renameUtil;