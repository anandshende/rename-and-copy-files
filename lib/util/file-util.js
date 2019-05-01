const fs = require('fs');
const path = require('path');

const fileUtil = {};

fileUtil.getFileByIndex = (fileIndex) => {
    return new Promise((resolve, reject) => {
        const dirPath = path.join(config.sourcePath);
        fs.readdir(dirPath, (err, files) => {
            if (err) reject({ msg: err, statusCode: 501 });
            files = files.filter(file => {
                let extArray = file.split('.');
                let ext = extArray.pop();
                return ext == 'jpg' || ext == 'jpeg' || ext == 'png' || ext == 'bmp';
            });
            if (!files || !files.length) {
                resolve({ msg: 'No Image Files' });
            }
            const index = fileIndex % files.length;
            const fileName = files[index];
            const path = `/${fileName}`;
            resolve({ index, fileName, path });
        });
    });
};

fileUtil.getFile = (currentIndex, offset) => {
    return new Promise((resolve, reject) => {
        if (currentIndex + offset < 0) {
            reject({ msg: 'Invalid Inputs', statusCode: 401 });
        }
        let index = (currentIndex + offset);
        fileUtil.getFileByIndex(index)
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
};

module.exports = fileUtil;