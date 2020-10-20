//数据操作模块

//导入mysql模块
const mysql = require('mysql');
//创建数据库连接
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test',
    useConnectionPooling:true
})

module.exports = conn