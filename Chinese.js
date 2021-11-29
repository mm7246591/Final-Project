//----串接API
fetch("../topic API/110Chinese.json")
  .then((res) => {
    const data = res.json();
    return data;
  })
  .then((data) => {
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
    
    // let topic =data.document.page[1].row[6].column[0].text.text;
    // let topic1 =data.document.page[1].row[7].column[0].text.text;
    // let topic2 =data.document.page[1].row[7].column[2].text.text;
    // let topic3 =data.document.page[1].row[8].column[0].text.text;
    // let topic4 =data.document.page[1].row[8].column[2].text.text;
    // let topic5 =data.document.page[10].row[12].column[0].text.text;
    // for(let j=0;j<2;j++){
    //   topic =data.document.page[10].row[12].column[0].text.text;
    //   if(topic!=undefined && topic!="" ){
    //     $('#question-form').append(topic);
    //     console.log(topic);
    //   }
    // }
    // console.log(topic);
    // console.log(topic1);
    // console.log(topic2);
    // console.log(topic3);
    // console.log(topic4);
    // console.log(topic5);
  
  });