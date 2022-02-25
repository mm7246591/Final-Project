var mongoose = require('mongoose');

var scoreSchema = new mongoose.Schema({
    object: {
        type: String
    },
    score: {
        type: Number
    }
});
scoreSchema.set('collection', 'score');
let score = mongoose.model('score', scoreSchema);
module.exports = score;
// const scoreModel = mongoose.model('score', scoreSchema);
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