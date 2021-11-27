let xhr = new XMLHttpRequest();
let url = '../topic API/110English.json'
xhr.open('GET', url, true);
xhr.onload = function() {
    if(this.status >= 200 && this.status < 400) {
        let response = JSON.parse(this.response)
        console.log(response)
    }
};
xhr.onerror = function() {
};
xhr.send();