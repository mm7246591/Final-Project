var mongoose = require('mongoose');
// 聲明一個數據集 對象, set mongoose: define Schema
var scoreSchema = new mongoose.Schema({
    object: {
        type: String
    },
    score: {
        type: Number
    }
});
// 將數據模型暴露出去, 使用mongoose中Schema的set()方法
// 若是沒有使用set, 預設會由下一行程式所設定的model名稱作為collection的名稱
scoreSchema.set('collection', 'score');
// 使用model()方法建立與資料庫溝通的模組
const scoreModel = mongoose.model('score', scoreSchema);
module.exports = scoreModel;
// const testModel = mongoose.model('score', scoreSchema);
// const content = new testModel({type: "chinese", score: 88});

// content.save(function(err){
//     if(err) console.log(err);
//     console.log('新增成功'); 
// })

// mongoose.model('score', scoreSchema).find((err, data)=>{
//     if(err) console.log(err);
//     else console.log(data);
// });