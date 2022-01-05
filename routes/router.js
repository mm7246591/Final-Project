const express = require('express');
const router = express.Router();
var User = require('../models/users');
var Score = require('../models/score');
var Answer = require('../models/answer');
router.get('/', (req, res) => {
    res.render('index');
})

router.get('/:where/:type', (req, res) => {
    console.log(req.originalUrl)
    res.render(`${req.params.where}/${req.params.type}`);
})
router.post('/:where/:type', (req, res) => {
    if (req.params.type === 'Chinese') {
        // 接收國文答案
        let Single = Object.values(req.body);
        let singleStudent = [];
        for (let i of Single) {
            singleStudent.push(i);
        };
        // 單選
        singleStudent = singleStudent.slice(0, 34);
        // 多選
        let Multiple0 = req.body.Chinese35;
        let Multiple1 = req.body.Chinese36;
        let Multiple2 = req.body.Chinese37;
        let Multiple3 = req.body.Chinese38;
        let Multiple4 = req.body.Chinese39;
        let Multiple5 = req.body.Chinese40;
        let Multiple6 = req.body.Chinese41;
        let Multiple7 = req.body.Chinese42;
        // 設定分數
        let score = 0;
        // 拿取資料庫答案
        Answer.findOne({ '_id': '61cbc5d8f91f428ddb58aff3' }, function(err, objects) {
            let Single = objects.Single;
            let Multiple = objects.Multiple;
            let singleDb = [];
            let multipleDb = [];
            // 單選
            for (let i of Single) {
                singleDb.push(i.answer);
            };
            // 多選
            for (let i of Multiple) {
                multipleDb.push(i);
            };
            // 對單選題
            for (let i = 0; i < singleDb.length; i++) {
                if (singleStudent[i] === singleDb[i]) {
                    score += 2;
                }
            };
            // 對多選35題
            let count = 0;
            if (Multiple0 !== undefined) {
                if (JSON.stringify(Multiple0) === JSON.stringify(multipleDb[0])) {
                    score += 4;
                } else if (Multiple0.length > multipleDb[0].length) {
                    for (let i = 0; i < Multiple0.length; i++) {
                        if (multipleDb[0][i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 2.4 : count === 2 ? score += 0.8 : score += 0;
                } else {
                    for (let i = 0; i < multipleDb[0].length; i++) {
                        if (Multiple0[i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 2.4 : count === 2 ? score += 0.8 : score += 0;
                }
            }
            // 對多選36題
            if (Multiple1 !== undefined) {
                count = 0;
                if (JSON.stringify(Multiple1) === JSON.stringify(multipleDb[1])) {
                    score += 4;
                } else if (Multiple1.length > multipleDb[1].length) {
                    for (let i = 0; i < Multiple1.length; i++) {
                        if (multipleDb[1][i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 2.4 : count === 2 ? score += 0.8 : score += 0;
                } else {
                    for (let i = 0; i < multipleDb[1].length; i++) {
                        if (Multiple1[i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 2.4 : count === 2 ? score += 0.8 : score += 0;
                }
            }
            // 對多選37題
            if (Multiple2 !== undefined) {
                count = 0;
                if (JSON.stringify(Multiple2) === JSON.stringify(multipleDb[2])) {
                    score += 4;
                } else if (Multiple2.length > multipleDb[2].length) {
                    for (let i = 0; i < Multiple2.length; i++) {
                        if (multipleDb[2][i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 2.4 : count === 2 ? score += 0.8 : score += 0;
                } else {
                    for (let i = 0; i < multipleDb[2].length; i++) {
                        if (Multiple2[i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 2.4 : count === 2 ? score += 0.8 : score += 0;
                }
            }
            // 對多選38題
            if (Multiple3 !== undefined) {
                count = 0;
                if (JSON.stringify(Multiple3) === JSON.stringify(multipleDb[3])) {
                    score += 4;
                } else if (Multiple3.length > multipleDb[3].length) {
                    for (let i = 0; i < Multiple3.length; i++) {
                        if (multipleDb[3][i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 2.4 : count === 2 ? score += 0.8 : score += 0;
                } else {
                    for (let i = 0; i < multipleDb[3].length; i++) {
                        if (Multiple3[i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 2.4 : count === 2 ? score += 0.8 : score += 0;
                }
            }
            // 對多選39題
            if (Multiple4 !== undefined) {
                count = 0;
                if (JSON.stringify(Multiple4) === JSON.stringify(multipleDb[4])) {
                    score += 4;
                } else if (Multiple4.length > multipleDb[4].length) {
                    for (let i = 0; i < Multiple4.length; i++) {
                        if (multipleDb[4][i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 2.4 : count === 2 ? score += 0.8 : score += 0;
                } else {
                    for (let i = 0; i < multipleDb[4].length; i++) {
                        if (Multiple0[4] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 2.4 : count === 2 ? score += 0.8 : score += 0;
                }
            }
            // 對多選40題
            if (Multiple5 !== undefined) {
                count = 0;
                if (JSON.stringify(Multiple5) === JSON.stringify(multipleDb[5])) {
                    score += 4;
                } else if (Multiple5.length > multipleDb[5].length) {
                    for (let i = 0; i < Multiple5.length; i++) {
                        if (multipleDb[5][i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 2.4 : count === 2 ? score += 0.8 : score += 0;
                } else {
                    for (let i = 0; i < multipleDb[5].length; i++) {
                        if (Multiple5[i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 2.4 : count === 2 ? score += 0.8 : score += 0;
                }
            }
            // 對多選41題
            if (Multiple6 !== undefined) {
                count = 0;
                if (JSON.stringify(Multiple6) === JSON.stringify(multipleDb[6])) {
                    score += 4;
                } else if (Multiple6.length > multipleDb[6].length) {
                    for (let i = 0; i < Multiple6.length; i++) {
                        if (multipleDb[6][i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 2.4 : count === 2 ? score += 0.8 : score += 0;
                } else {
                    for (let i = 0; i < multipleDb[6].length; i++) {
                        if (Multiple6[i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 2.4 : count === 2 ? score += 0.8 : score += 0;
                }
            }
            // 對多選42題
            if (Multiple7 !== undefined) {
                count = 0;
                if (JSON.stringify(Multiple7) === JSON.stringify(multipleDb[7])) {
                    score += 4;
                } else if (Multiple7.length > multipleDb[7].length) {
                    for (let i = 0; i < Multiple7.length; i++) {
                        if (multipleDb[7][i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 2.4 : count === 2 ? score += 0.8 : score += 0;
                } else {
                    for (let i = 0; i < multipleDb[7].length; i++) {
                        if (Multiple7[i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 2.4 : count === 2 ? score += 0.8 : score += 0;
                }
            }
            // 成績存入資料庫
            let object = req.params.type;
            let grade = new Score({ score, object });
            grade.save(function(err) {
                if (err) {
                    return res.status(500).json(err);
                } else {
                    return res.status(404).json();
                }
            });
        });
    };
    if (req.params.type === 'English') {
        // 接收英文答案
        let arry = Object.values(req.body);
        let singleStudent = [];
        for (let i of arry) {
            singleStudent.push(i);
        };
        // 設定分數
        let score = 0;
        // 拿取資料庫答案
        Answer.findOne({ '_id': '61c9d98695abd3f6e959e4c4' }, function(err, objects) {
            let Single = objects.Single;
            let singleDb = [];
            // 單選
            for (let i of Single) {
                singleDb.push(i.answer);
            };
            // 對單選
            for (let i = 0; i < singleDb.length; i++) {
                if (singleStudent[i] === singleDb[i]) {
                    score += 2;
                }
            };
            // 成績存入資料庫
            let object = req.params.type;
            let grade = new Score({ score, object });
            grade.save(function(err) {
                if (err) {
                    return res.status(500).json(err);
                } else {
                    return res.status(404).json();
                }
            });
        });
    };
    if (req.params.type === 'Math') {
        // 接收數學答案
        let Single = Object.values(req.body);
        let singleStudent = [];
        for (let i of Single) {
            singleStudent.push(i);
        };
        // 單選
        singleStudent = singleStudent.slice(0, 6);
        // 多選
        let Multiple0 = req.body.Math7;
        let Multiple1 = req.body.Math8;
        let Multiple2 = req.body.Math9;
        let Multiple3 = req.body.Math10;
        let Multiple4 = req.body.Math11;
        let Multiple5 = req.body.Math12;
        let Multiple6 = req.body.Math13;
        // 選填
        let Optional14 = req.body.Math14;
        let Optional15 = req.body.Math15;
        let Optional16 = req.body.Math16;
        let Optional17 = req.body.Math17;
        let Optional18 = req.body.Math18;
        let Optional19 = req.body.Math19;
        let Optional20 = req.body.Math20;
        let Optional21 = req.body.Math21;
        let Optional22 = req.body.Math22;
        let Optional23 = req.body.Math23;
        let Optional24 = req.body.Math24;
        let Optional25 = req.body.Math25;
        let Optional26 = req.body.Math26;
        let Optional27 = req.body.Math27;
        let Optional28 = req.body.Math28;
        let Optional29 = req.body.Math29;
        let Optional30 = req.body.Math30;
        let Optional31 = req.body.Math31;
        let Optional32 = req.body.Math32;
        let optionalA = [];
        optionalA.push(Optional14, Optional15);
        let optionalB = [];
        optionalB = optionalB.push(Optional16, Optional17, Optional18);
        let optionalC = [];
        optionalC = optionalC.push(Optional19, Optional20, Optional21);
        let optionalD = [];
        optionalD = optionalD.push(Optional22, Optional23, Optional24);
        let optionalE = [];
        optionalE = optionalE.push(Optional25, Optional26, Optional27);
        let optionalF = [];
        optionalF = optionalF.push(Optional28, Optional29, Optional30);
        let optionalG = [];
        optionalG = optionalG.push(Optional31, Optional32);
        // 設定分數
        let score = 0;
        // 拿取資料庫答案
        Answer.findOne({ '_id': '61cd353e9c0ef29b8f8ae276' }, function(err, objects) {
            let Single = objects.Single;
            let Multiple = objects.Multiple;
            let Optional = objects.Optional;
            let singleDb = [];
            let multipleDb = [];
            let optionalDb = [];
            // 單選
            for (let i of Single) {
                singleDb.push(i.answer);
            };
            // 多選
            for (let i of Multiple) {
                multipleDb.push(i);
            };
            // 選填
            for (let i of Optional) {
                optionalDb.push(i);
            }
            // 對單選
            for (let i = 0; i < singleDb.length; i++) {
                if (singleStudent[i] === singleDb[i]) {
                    score += 5;
                }
            };
            // 對多選7
            let count = 0;
            if (Multiple0 !== undefined) {
                if (JSON.stringify(Multiple0) === JSON.stringify(multipleDb[0])) {
                    score += 5;
                } else if (Multiple0.length > multipleDb[0].length) {
                    for (let i = 0; i < Multiple0.length; i++) {
                        if (multipleDb[0][i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 3 : count === 2 ? score += 1 : score += 0;
                } else {
                    for (let i = 0; i < multipleDb[0].length; i++) {
                        if (Multiple0[i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 3 : count === 2 ? score += 1 : score += 0;
                }
            }
            // 對多選8
            if (Multiple1 !== undefined) {
                count = 0;
                if (JSON.stringify(Multiple1) === JSON.stringify(multipleDb[1])) {
                    score += 5;
                } else if (Multiple1.length > multipleDb[1].length) {
                    for (let i = 0; i < Multiple1.length; i++) {
                        if (multipleDb[1][i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 3 : count === 2 ? score += 1 : score += 0;
                } else {
                    for (let i = 0; i < multipleDb[1].length; i++) {
                        if (Multiple1[i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 3 : count === 2 ? score += 1 : score += 0;
                }
            }
            // 對多選9
            if (Multiple2 !== undefined) {
                count = 0;
                if (JSON.stringify(Multiple2) === JSON.stringify(multipleDb[2])) {
                    score += 5;
                } else if (Multiple2.length > multipleDb[2].length) {
                    for (let i = 0; i < Multiple2.length; i++) {
                        if (multipleDb[2][i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 3 : count === 2 ? score += 1 : score += 0;
                } else {
                    for (let i = 0; i < multipleDb[2].length; i++) {
                        if (Multiple2[i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 3 : count === 2 ? score += 1 : score += 0;
                }
            }
            // 對多選10
            if (Multiple3 !== undefined) {
                count = 0;
                if (JSON.stringify(Multiple3) === JSON.stringify(multipleDb[3])) {
                    score += 5;
                } else if (Multiple3.length > multipleDb[3].length) {
                    for (let i = 0; i < Multiple3.length; i++) {
                        if (multipleDb[3][i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 3 : count === 2 ? score += 1 : score += 0;
                } else {
                    for (let i = 0; i < multipleDb[3].length; i++) {
                        if (Multiple3[i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 3 : count === 2 ? score += 1 : score += 0;
                }
            }
            // 對多選11
            if (Multiple4 !== undefined) {
                count = 0;
                if (JSON.stringify(Multiple4) === JSON.stringify(multipleDb[4])) {
                    score += 5;
                } else if (Multiple4.length > multipleDb[4].length) {
                    for (let i = 0; i < Multiple4.length; i++) {
                        if (multipleDb[4][i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 3 : count === 2 ? score += 1 : score += 0;
                } else {
                    for (let i = 0; i < multipleDb[4].length; i++) {
                        if (Multiple0[4] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 3 : count === 2 ? score += 1 : score += 0;
                }
            }
            // 對多選12
            if (Multiple5 !== undefined) {
                count = 0;
                if (JSON.stringify(Multiple5) === JSON.stringify(multipleDb[5])) {
                    score += 5;
                } else if (Multiple5.length > multipleDb[5].length) {
                    for (let i = 0; i < Multiple5.length; i++) {
                        if (multipleDb[5][i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 3 : count === 2 ? score += 1 : score += 0;
                } else {
                    for (let i = 0; i < multipleDb[5].length; i++) {
                        if (Multiple5[i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 3 : count === 2 ? score += 1 : score += 0;
                }
            }
            // 對多選13
            if (Multiple6 !== undefined) {
                count = 0;
                if (JSON.stringify(Multiple6) === JSON.stringify(multipleDb[6])) {
                    score += 5;
                } else if (Multiple6.length > multipleDb[6].length) {
                    for (let i = 0; i < Multiple6.length; i++) {
                        if (multipleDb[6][i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 3 : count === 2 ? score += 1 : score += 0;
                } else {
                    for (let i = 0; i < multipleDb[6].length; i++) {
                        if (Multiple6[i] === undefined) {
                            count++;
                        }
                    }
                    count === 1 ? score += 3 : count === 2 ? score += 1 : score += 0;
                }
            }
            // 對選填A
            if (Optional14 !== undefined && Optional15 !== undefined) {
                console.log(optionalDb[0], optionalA);
                if (JSON.stringify(optionalDb[0] === JSON.stringify(optionalA))) {
                    score += 5;
                }
            }
            // // 對選填B
            if (Optional16 !== undefined && Optional17 !== undefined && Optional18 !== undefined) {
                if (JSON.stringify(optionalDb[1] === JSON.stringify(optionalB))) {
                    score += 5;
                }
            }
            // // 對選填C
            if (Optional19 !== undefined && Optional20 !== undefined && Optional21 !== undefined) {
                if (JSON.stringify(optionalDb[2] === JSON.stringify(optionalC))) {
                    score += 5;
                }
            }
            // // 對選填D
            if (Optional22 !== undefined && Optional23 !== undefined && Optional24 !== undefined) {
                if (JSON.stringify(optionalDb[3] === JSON.stringify(optionalD))) {
                    score += 5;
                }
            }
            // // 對選填E
            if (Optional25 !== undefined && Optional26 !== undefined && Optional27 !== undefined) {
                if (JSON.stringify(optionalDb[4] === JSON.stringify(optionalE))) {
                    score += 5;
                }
            }
            // // 對選填F
            if (Optional28 !== undefined && Optional29 !== undefined && Optional30 !== undefined) {
                if (JSON.stringify(optionalDb[5] === JSON.stringify(optionalF))) {
                    score += 5;
                }
            }
            // // 對選填G
            if (Optional31 !== undefined && Optional32 !== undefined) {
                if (JSON.stringify(optionalDb[6] === JSON.stringify(optionalG))) {
                    score += 5;
                }
            }
            // 成績存入資料庫
            let object = req.params.type;
            let grade = new Score({ score, object });
            grade.save(function(err) {
                if (err) {
                    return res.status(500).json(err);
                } else {
                    return res.status(404).json();
                }
            });
        });
    };
    res.redirect('/');
});
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


router.get('/score', (req, res) => {
    res.render('score');
});

router.get('/score', (req, res) => {
    console.log("Yaaaaaa");
    Score.findOne({
        type: req.query.type,
        score: req.query.score
    }, function(err, data){
        if(err) throw err;
        else res.json(data);
    })
});

// 這裡的業務邏輯將寫在 兩個post路由裡！！！
router.post('/member', function(req, res) {
    var postData = {
        username: req.body.username,
        password: req.body.password
    };
    User.findOne({
        username: postData.username,
        password: postData.password
    }, function(err, data) {
        if (err) throw err;
        if (data) {
            console.log('登錄成功');
            res.redirect('/');
        } else {
            console.log('賬號或密碼錯誤');
            res.redirect('/member');
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
                res.redirect('/member');
                // res.redirect('/userList');      // 重定向到所用用戶列表
            })
        }
    });
});
router.get('/userList', function(req, res) {
    var userList = User.find({}, function(err, data) {
        if (err) throw err;
        res.send(data)
    });
});

module.exports = router;