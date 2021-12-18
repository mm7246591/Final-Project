var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// 聲明一個數據集 對象
var userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },    
    name: String,
    age: Number,
    gender: String,
    grade: Number,
    mail: String,
    createAt: {
        type: Date,
        default : Date.now()
    }
});
// 將數據模型暴露出去
userSchema.set('collection','user');
module.exports = mongoose.model('user', userSchema);