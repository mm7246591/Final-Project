//require -> 引入模組
var createError = require('http-errors');
var express = require('express');
const MongoStore = require('connect-mongo'); 
var path = require('path');
const passport = require('passport');
var cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const flash = require('express-flash');
var session = require('express-session');
var logger = require('morgan'); //用來記錄HTTP相關的請求
require('dotenv').config();

var router = require('./routes/router');
var objectRouter = require('./routes/object');

//將mongoose套件引入, connection using mongoose
var mongoose = require('mongoose');
mongoose.connect(process.env.databaseUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
var db = mongoose.connection;
var bodyParser = require('body-parser');

var app = express(); //建立express模組

// view engine setup 設定樣板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev')); //將logger加入到app中，可提供於大數據使用
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
// app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public')); //公開的靜態檔案資料夾
app.use('/', router);
app.use('/', objectRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
app.use(express.urlencoded({
    extended: false
}));
// 連接成功
db.on('open', function() {
    console.log('MongoDB Connection Successed');
});
// 連接失敗
db.on('error', function() {
    console.log('MongoDB Connection Error');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = app;