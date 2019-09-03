var express = require("express");
var app = express();
// 3.引用加密模块
var crypto = require("crypto");
// 5.引用mongoose模块
var mongoose = require("mongoose");
// 10.应用post的解析模块
var bodyParser = require("body-parser");
// 11.使用body-parser下的解析post功能
var uE = bodyParser.urlencoded({
    extended: false
});

// ****15****session步骤（1）引用session模块
var session = require("express-session");
// ****16****session步骤（2）初始化session
app.use(session({
    secret: 'lpb152948', //设置签名密钥 内容可以任意填写
    cookie: {
        maxAge: 80 * 1000
    }, //设置cookie的过期时间 例：80s后session和相应的cookie失效过期
    resave: true, //强制保存  如果session没有被修改也要重新保存
    saveUninitialized: false //如果原先没有session那么就设置 否则不设置
}));
// 19.引用path模块
var path=require("path");
// // 18 设置webserver（静态资源文件）
// 调用express下读取静态文件的方法 但是他不知道读取哪里
// 所以要使用path.join(__dirname, "status")来吧文件夹的地址和要读取的文件夹进行拼接用来告诉express
// 从哪里找静态文件
// 注意path是一个工具模块（path是内置模块直接引）
app.use(express.static(path.join(__dirname,"status")));

// 2.解决跨域
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
});
// 7.定义集合，但是注意定义集合的时候不能放到路由中
var dbCollection = mongoose.model("doubans", {
    userEmail: String,
    userPass: String,
    userName: String
});
app.get("/reg", function (req, res) {
    //1.得到前台数据
    var userEmail = req.query.userEmail;
    var userPass = req.query.userPass;
    var userName = req.query.userName;
    console.log(userEmail + "---" + userPass + "---" + userName);
    // 4.开始加密
    var md5Pass = crypto.createHash('md5').update(userPass).digest('hex');
    console.log(md5Pass);
    // 6.开始连接数据库
    mongoose.connect("mongodb://localhost:27017/bb", {
        useNewUrlParser: true
    }, function (err) {
        if (err) {
            console.log("数据库连接失败");
        } else {
            console.log("数据库连接ok");
            // 8.设置存入数据
            var userDemo = new dbCollection({
                userEmail,
                userPass: md5Pass,
                userName
            });
            // 9.开始存
            userDemo.save().then((ok) => {
                console.log(ok)
                res.send({
                    mes: "注册成功",
                    status: 200,
                    linkid: 1
                })
            }, (err) => {
                res.send({
                    mes: "注册失败",
                    status: 500,
                    linkid: 0
                })
            })
        }
    })

})

app.post("/login", uE, function (req, res) {
    // 12.开始接收数据
    var userEmail = req.body.userEmail;
    var userPass = req.body.userPass;
    console.log(userEmail + "---" + userPass);
    // 13.开始加密
    var md5Pass = crypto.createHash('md5').update(userPass).digest('hex');
    // 14.数据库查询
    mongoose.connect("mongodb://localhost:27017/bb", {
        useNewUrlParser: true
    }, function (err) {
        if (err) {
            console.log("err");
        } else {
            console.log("ok");
            dbCollection.find({
                userEmail:userEmail,
                userPass: md5Pass
            }).then((ok) => {
                // 在查询的时候成功可能有两种结果 第一种查出来值了 第二种没有查出来但是反回了一个空数组

                if (ok.length > 0) {

                    // ****17****session步骤（3）
                    req.session.loginok = true;
                    req.session.userEmail = userEmail;
                    res.send({
                        mes: "登录成功",
                        status: 200,
                        linkid: 2,
                        session: req.session
                    });
                } else if (ok.length == 0) {
                    res.send({
                        mes: "登录失败",
                        status: 200,
                        linkid: 3
                    });
                }
            }, (err) => {
                res.send({
                    mes: "连接超时请稍后再试",
                    status: 500,
                    linkid: 4
                });
            });
        }
    });

});

app.get("/index",function(req,res){
    console.log(req.session);
    if(req.session.loginok==true){
        res.send({mes:"用户登录过",status:200,linkid:8,userEmail:req.session.userEmail});
    }else{
        res.send({mes:"用户没有登录过",status:200,linkid:9});
    }
});
app.listen(3000);