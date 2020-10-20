//路由模块 本质就是 URL 地址到处理函数的对应关系
const express = require('express');
const router = express.Router();


//引入业务模块
const ctrl = require('./controller.js')

//只要有人请求后端的 / 根路径地址，就提示他，请求API服务器成功了！
router.get('/', ctrl.testAPI)

//对外暴露 getAllHero 接口
router.get('/getallhero', ctrl.getAllHero)

//对外暴露 addhero 接口 'http://127.0.0.1:5001/addhero' post请求  {name,gender}
router.post('/addhero', ctrl.addHero)

//对外暴露 gethero 接口   'http://127.0.0.1:5001/gethero/:id'   get请求
router.get('/gethero/:id', ctrl.getHeroById)

//对外暴露 updatehero 接口   'http://127.0.0.1:5001/updatehero/:id' post请求 {name,gender}
router.post('/updatehero/:id', ctrl.updateHeroById)

//对外暴露 deletehero 接口   'http://127.0.0.1:5001/deletehero/:id' get
router.post('/deletehero/:id', ctrl.deleteHeroById)



module.exports = router;