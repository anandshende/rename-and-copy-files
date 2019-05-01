var FileUtil = {
    getImage: function (current, offset) {
        return new Promise((resolve, reject) => {
            const url = `/file?current=${current}&offset=${offset}`;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    resolve(JSON.parse(xhttp.responseText));
                }
            };
            xhttp.onerror = function (err) {
                reject(err);
            };
            xhttp.open("GET", url, true);
            xhttp.send();
        });
    },

    renameImage: function (oldName, newName) {
        return new Promise((resolve, reject) => {
            const url = `/rename`;
            const body = { oldName, newName };
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 204) {
                    resolve();
                }
            };
            xhttp.onerror = function (err) {
                reject(err);
            };
            xhttp.open("POST", url, true);
            xhttp.setRequestHeader("Content-Type", 'application/json');
            xhttp.send(JSON.stringify(body));
        });
    },
}