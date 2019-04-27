const renameUtil = require('../lib/util/rename-util');

const oldFile = 'a.txt';
const newFile = 'b.txt';

describe('Renaming File', function () {
    it(`${oldFile} to ${newFile}`, function () {
        return renameUtil.rename(oldFile, newFile);
    });
});