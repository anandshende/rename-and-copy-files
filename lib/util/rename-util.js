const fs = require('fs');
const path = require('path');

const renameUtil = {};

renameUtil.rename = (oldName, newName) => {
    return new Promise((resolve, reject) => {
        const oldPath = path.join(config.sourcePath, oldName);
        const newPath = path.join(config.destinationPath, newName);

        fs.rename(oldPath, newPath, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};

module.exports = renameUtil;