var currentImageIndex = -1;

var domLoaded = function () {
        var offset = 1;
        getImage(offset);
};

var getNextImage = function () {
        var offset = 1;
        getImage(offset);
}

var getPrevImage = function () {
        var offset = -1;
        getImage(offset);
}

var renameFile = function () {
        var oldFileName = document.getElementById(Render.oldNameId).value;
        var extArr = oldFileName.split('.');
        var ext = extArr[extArr.length - 1];
        var newFileName = `${document.getElementById(Render.newNameId).value}.${ext}`;
        FileUtil.renameImage(oldFileName, newFileName)
                .then(() => getNextImage())
                .catch(err => alert(err));
};

var getImage = function (offset) {
        FileUtil.getImage(currentImageIndex, offset)
                .then(fileInfo => Render.renderFile(fileInfo))
                .catch(err => alert(err));
}

document.addEventListener("DOMContentLoaded", function (event) {
        domLoaded();
});