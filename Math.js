// let xhr = new XMLHttpRequest();
// let url = '../topic API/110Math.json'
// xhr.open('GET', url, true);
// xhr.onload = function() {
//     if(this.status >= 200 && this.status < 400) {
//         let response = JSON.parse(this.response)
//         console.log(response)
//     }
// };
// xhr.onerror = function() {
// };
// xhr.send();
fetch("../topic API/110Math.json")
  .then((res) => {
    const data = res.json();
    return data;
  })
  .then((data) => {
    console.log(data);
  });