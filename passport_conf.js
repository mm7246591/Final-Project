const LocalStrategy =require('passport-local').Strategy;
const passport =require('passport');
const bcrypt = require('bcrypt');
const User =require('./models/users');
const flash = require('express-flash');
  passport.serializeUser((user,done) =>{
        done(null,user.id)
    });
    passport.deserializeUser(async(id,done)=>{
        console.log(id)
        try{
            let user= await User.findById(id);
            if(user){
                return done(null,user);
            }else{
                return done(null,false,{
                    message:'查無此使用者'
                });
            }
        }catch(e){
            done(e);
        }
        
    });
const registerStrategy = new LocalStrategy({
    usernameField:'username',
    passReqToCallback:true
},(req,username,password,done)=>{
    console.log('資料庫中搜尋是')
    User.findOne({
        username:username
    },async(err,user)=>{
        if(err){
            return done(err);
        }
        if(user){
            console.log('此帳號已經有人使用');
            return done(null,false,req.flash('error','此帳號已經有人使用'));
        }else{
            let newUser =new User({
                username:req.body.username,
                name: req.body.name,
                age: req.body.age,
                gender: req.body.gender,
                grade: req.body.grade,
                mail: req.body.mail,
                password: await bcrypt.hash(password,10),
            });
            newUser.save((err,user)=>{
                if(err){
                    throw err;
                }
                console.log(newUser);
                console.log('註冊成功');
                return done(null,user);
            });
        }
    });
});
passport.use('register',registerStrategy);

const getUserEmail = username => User.find(user => user.username === username);
const authenticatrUser=async(req,username,password,done) =>{
    console.log('authenticatrUser');
    console.log(req.body.email);
    console.log('password:'+password);
    console.log('username:'+username);
    User.findOne({
        username:username
    },async(err,user)=>{
        try{
            if(await bcrypt.compare(password,user.password)){
                console.log(user);
                return done(null,user,{
                    message:'歡迎光臨'
                })
            }else{
                return done(null,false,{
                    message:'密碼錯誤'
                })
            }
        }catch(e){
            return done(e);
    
        }
        if(err){
            return done(err);
        }
        if(user){
            console.log(user);
            console.log('此電子信箱已經有人使用');
            return done(null,false,req.flash('error','此電子信箱已經有人使用'));
        }else{
            console.log('註冊成功');
                return done(null,user,req.flash('success','註冊成功'));
        }
    });
    
};
    passport.use(new LocalStrategy({
        usernameField:'username',
        passReqToCallback:true
    },authenticatrUser));
    
passport.use('sign',authenticatrUser);
module.exports = passport;
