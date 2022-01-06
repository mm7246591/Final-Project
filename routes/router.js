const express = require('express');
var session = require('express-session');
const flash = require('express-flash');
const MongoStore = require('connect-mongo');
const passport = require('../passport_conf');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const User = require('../models/users');
var status = false;
var title;
//檢查有沒有登入
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/member');
}
router.use(flash());
router.use(session({
    secret: process.env.session_secret,
    store: MongoStore.create({ mongoUrl: process.env.databaseUrl, ttl: 60 }),
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600 * 1000 } //10分鐘到期
}));

router.use(passport.initialize());
router.use(passport.session());

router.get('/member/sign-up', (req, res) => {
    console.log('訪問註冊');
    // console.log(req.session);
    // console.log(req.sessionID);
    res.render('member/sign-up', {
        // title: 'Register'
        status: status,
        title: title
    });
});

router.post('/member/sign-up', passport.authenticate('register', {
    successRedirect: '/member',
    failureRedirect: '/member/sign-up',
    failureFlash: true
}), (req, res) => {
    res.render('member', { status: status, title: title });
});

router.post('/member/sign-up', (req, res, next) => {
    const {
        username,
        email,
        password
    } = req.body;
    const errors = [];
    if (!username || !email || !password) {
        errors.push({
            msg: '請填寫欄位資料'
        });
    } else {
        console.log('進入authenticate register')
        passport.authenticate('register', {
            successRedirect: '/member',
            failureRedirect: '/member/sign-up',
            failureFlash: true
        })(req, res, next);
    }
});
router.get('/member', (req, res) => {
    console.log('訪問登入');
    res.render('member', {
        // title: 'Login'
        status: status,
        title: title
    });
});
router.post('/member', passport.authenticate('local', {
    // successRedirect: '/',
    failureRedirect: '/member',
    failureFlash: true
}), (req, res) => {
    console.log('登錄成功');
    // console.log(req.user.name);
    status = true;
    title = req.user.name;
    res.render('index', { title: req.user.name, status: status });
});
router.post('/member', function(req, res) {
    var postData = {
        username: req.body.username,
        password: req.body.password
    };
    User.findOne({
        username: postData.username,
    }, function(err, data) {
        console.log(req.body.password);
        console.log(data.password);
        if (bcrypt.compare(req.body.password, data.password)) {
            console.log('登錄成功');
            status = true;
            title = data.name;
            const name = data.name;
            const password = data.password;
            res.render('index', { title: title, status: status });
        } else {
            console.log('登錄失敗');
            res.render('member', { errorusername: '帳號或密碼錯誤', status: status, title: title });
        }
    })
});
router.get('/', (req, res) => {
    res.render('index', { status: status, title: title });
})
router.get('/logout', (req, res) => {
    status = false;
    title = '';
    req.logOut();
    res.render('index', { status: status, title: title });
})
router.get('/:where/:type', (req, res) => {
    console.log(req.originalUrl)
    if (req.params.where === 'member' && req.params.type === 'sign-in') {
        User.findById(req.session.passport.user, function(err, user) {
            console.log(user);
            if (err) {
                console.log(err);
            } else {
                res.render(`${req.params.where}/${req.params.type}`, {
                    user: user,
                    status: status,
                    title: title
                })
            }
        })
    } else {
        res.render(`${req.params.where}/${req.params.type}`, { status: status, title: title });
    }
});

router.get('/userList', function(req, res) {
    var userList = User.find({}, function(err, data) {
        if (err) throw err;
        res.send(data)
    });
});

router.get('/answer', (req, res) => {
    res.render('answer', { status: status, title: title });
});

router.get('/member', (req, res) => {
    res.render('member', { status: status, title: title });
});

router.get('/test', isAuthenticated, (req, res) => {
    res.render('test', { status: status, title: title });
});

router.get('/about', (req, res) => {
    res.render('about', { status: status, title: title });
});

// 
router.post('/member', function(req, res) {
    var postData = {
        username: req.body.username,
        password: req.body.password
    };
    User.findOne({
        username: postData.username,
        password: postData.password
    }, function(err, user) {
        if (err) throw err;
        if (user) {
            console.log('登錄成功');
            res.render('index', { status: status, title: title });
        } else {
            console.log('賬號或密碼錯誤');
            res.render('member', { status: status, title: title });
        }
    })
});

router.post('/member/sign-up', function(req, res) {
    // 獲取用戶提交的信息
    var postData = {
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        grade: req.body.grade,
        mail: req.body.mail
    };
    // console.log('username:' + req.body.username);
    // console.log('name' + req.body.name);
    // console.log('password' + req.body.password);

    //查詢是否被註冊
    User.findOne({ username: postData.username }, function(err, data) {
        if (data) {
            res.send('此用戶名已被註冊');
        } else {
            // 保存到數據庫
            User.create(postData, function(err, data) {
                if (err) throw err;
                console.log('註冊成功');
                res.render('member', { status: status, title: title });
                // res.redirect('/userList');      // 重定向到所用用戶列表
            })
        }
    });
});

module.exports = router;