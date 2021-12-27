const express = require('express');
const router = express.Router();
var User = require('../models/users');

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/:where/:type', (req, res) => {
    console.log(req.originalUrl)
    res.render(`${req.params.where}/${req.params.type}`);
})

router.get('/answer', (req, res) => {
    res.render('answer');
});

router.get('/member', (req, res) => {
    res.render('member');
});

router.get('/test', (req, res) => {
    res.render('test');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.post('/quize/Chinese', function(req, res){
    var answer = req.body.Chinese1;
    console.log(req.body);
    res.redirect('/test');
});

// 這裡的業務邏輯將寫在 兩個post路由裡！！！
router.post('/member', function (req, res) {
	var postData = {
        username: req.body.username,
        password: req.body.password
    };
    User.findOne({
        username: postData.username,
        password: postData.password
    }, function (err, data) {
        if(err) throw err;
        if(data){
            console.log('登錄成功');
            res.redirect('/'); 
        }else{
            console.log('賬號或密碼錯誤');
            res.redirect('/member'); 
        }
    })
});
router.post('/member/sign-up', function (req, res) {
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
    User.findOne({username: postData.username}, function (err, data) {
        if (data) {
            res.send('此用戶名已被註冊');
        } else {
            // 保存到數據庫
            User.create(postData, function (err, data) {
                if (err) throw err;
                console.log('註冊成功');
                res.redirect('/member');
                // res.redirect('/userList');      // 重定向到所用用戶列表
            })
        }
    });
});
router.get('/userList', function (req, res) {
    var userList = User.find({}, function (err, data) {
        if (err) throw  err;
        res.send(data)
    });
});

module.exports = router;