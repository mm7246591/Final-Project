//----串接API
fetch("../topicAPI/110English.json")
  .then((res) => {
    const data = res.json();
    return data;
  })
  .then((data) => {
    // console.log(data);
    let topic;
    var page=[];//每一頁裡面有幾個row
    var column=[];//每一頁的column的大小不同
   
    for(let p=1;p<data.document.page.length;p++)
    {
      page[p]=data.document.page[p].row.length;//頁數
      // console.log(page);
      for(let c=0;c<data.document.page.length;c++)
      {
        column[c]=data.document.page[c].row[0].column.length;
        // console.log(column);
      }
    }
    for(let k=1;k<data.document.page.length;k++)
    {
      for(let i=0;i<page[k]-1;i++)
      {
        for(let j=0;j<column[k];j++){
          topic =data.document.page[k].row[i].column[j].text.text;
          if(topic!=undefined && topic!="" ){
            $('#question-form').append(topic +"<br>");
            console.log(topic);
          }
        }
        
      }
    }
  });
  