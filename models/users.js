var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// 聲明一個數據集 對象, set mongoose: define Schema
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
// 將數據模型暴露出去, 使用mongoose中Schema的set()方法
// 若是沒有使用set, 預設會由下一行程式所設定的model名稱作為collection的名稱
userSchema.set('collection','user');
// 使用model()方法建立與資料庫溝通的模組
module.exports = mongoose.model('user', userSchema);