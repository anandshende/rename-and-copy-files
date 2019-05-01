var Render = {

    newNameId: 'newFileName',
    oldNameId: 'oldFileName',
    imageId: 'imageView',

    renderFile: function (fileInfo) {
        var { index, fileName, path } = fileInfo;

        currentImageIndex = index;
        document.getElementById(this.oldNameId).value = fileName;
        document.getElementById(this.newNameId).value = '';
        document.getElementById(this.imageId).src = path;
    }
}