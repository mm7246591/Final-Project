var mongoose = require('mongoose');

var scoreSchema = new mongoose.Schema({
    object: {
        type: String
    },
    score: {
        type: Number
    }
});
<<<<<<< HEAD
scoreSchema.set('collection','score');
module.exports = mongoose.model('score', scoreSchema);

=======
scoreSchema.set('collection', 'score');
let score = mongoose.model('score', scoreSchema);
module.exports = score;
>>>>>>> 93c1db96092b290d2847ca2c12cef2cecb5ecd24
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