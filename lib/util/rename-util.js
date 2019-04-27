const fs = require('fs');
const path = require('path');

const renameUtil = {};

renameUtil.rename = (oldName, newName) => {
    return new Promise((resolve, reject) => {
        const basePath = './public';
        const oldPath = path.join(basePath, oldName);
        const newPath = path.join(basePath, newName);

        fs.rename(oldPath, newPath, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};

module.exports = renameUtil;