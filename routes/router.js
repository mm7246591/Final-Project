const express = require('express');
var session = require('express-session');
const flash = require('express-flash');
const MongoStore = require('connect-mongo');
const passport = require('../passport_conf');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const User = require('../models/users');
const Score = require('../models/score');
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
        status: status,
        title: title
    });
});

router.post('/member/sign-up', passport.authenticate('register', {
    // successRedirect: '/member',
    failureRedirect: '/member/sign-up',
    failureFlash: true
}), (req, res) => {
    console.log('註冊成功!!');
    res.render('member', { status: status, title: title });
});

router.get('/member', (req, res) => {
    console.log('訪問登入');
    res.render('member', {
        status: status,
        title: title
    });
});
router.post('/member', passport.authenticate('local', {
    // successRedirect: '/',
    failureRedirect: '/member',
    failureFlash: true
}), (req, res) => {
    console.log('登錄成功!!');
    console.log(req.user.name+"It's my name.");
    status = true;
    title = req.user.name;
    res.render('index', { title: req.user.name, status: status });
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
router.get('/:where/:type', isAuthenticated, (req, res) => {
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
    } else if (req.params.where === 'member' && req.params.type === 'score') {
        User.findById(req.session.passport.user, function(err, user) {
            if (err) console.log(err);
            else {
                Score.find({}, function(err, score) {
                    console.log(score)
                    if (err) throw err;
                    res.render(`${req.params.where}/${req.params.type}`, {
                        score: score,
                        status: status,
                        title: title
                    });
                }).sort({ _id: -1 }).limit(10)
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

router.get('/test', isAuthenticated, (req, res) => {
    res.render('test', { status: status, title: title });
});

router.get('/about', (req, res) => {
    res.render('about', { status: status, title: title });
});

module.exports = router;