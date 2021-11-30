//----串接API
fetch("../topicAPI/110Math.json")
  .then((res) => {
    const data = res.json();
    return data;
  })
  .then((data) => {
    console.log(data);
  });