//----串接API
fetch("../topic API/110Math.json")
  .then((res) => {
    const data = res.json();
    return data;
  })
  .then((data) => {
    console.log(data);
  });