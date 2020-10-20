const express = require('express');
const app = express();

//注册body-parser中间件(post请求)
const bodyParsers = require('body-parser');
app.use(bodyParsers.urlencoded({ extended: false }))

//导入自己的路由模块
const router = require('./router.js')
    //注册路由模块
app.use(router)

//让后端项目，运行在5001端口
app.listen(5001, () => {
    console.log("api server running at http://127.0.0.1:5001")
})