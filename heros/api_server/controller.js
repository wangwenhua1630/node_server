//业务处理模块


//引入服务器
const conn = require('./db.js')

module.exports = {

    //测试API
    testAPI: (req, res) => {
        res.send('请求后台API接口成功')
    },
    getAllHero: (req, res) => {
        const sql = 'select * from heros';
        conn.query(sql, (err, result) => {
            //如果读取数据失败，则返回一个失败的结果
            if (err) return res.send({ status: 500, msg: err.message, data: null })
                //如果读取成功
            res.send({ status: 200, msg: 'ok', data: result });
        })
    },
    addHero: (req, res) => {
        //1.获取到客户端提交服务器的表单数据
        //获取到 客户端提交过来的 英雄名称，性别 即可
        //获取服务器当前的时间，当作英雄的添加时间

        const hero = req.body;
        //得到当前时间对象
        const dt = new Date();

        //字符串 padStart(长度，要填充的字符串)
        const y = dt.getFullYear();
        const m = (dt.getMonth() + 1).toString().padStart(2, '0');
        const d = dt.getDate().toString().padStart(2, '0');

        const hh = dt.getHours().toString().padStart(2, '0');
        const mm = dt.getMinutes().toString().padStart(2, '0');
        const ss = dt.getSeconds().toString().padStart(2, '0');
        //补全添加的时间
        hero.cTime = y + '-' + m + "-" + d + ' ' + hh + ":" + mm + ':' + ss;

        //调用conn.query 实现添加英雄
        const sql = 'insert into heros set ?';
        conn.query(sql, hero, (err, result) => {
            //如果读取数据失败，则返回一个失败的结果
            if (err) return res.send({ status: 500, msg: err.message, data: null })
                //如果读取成功
            res.send({ status: 200, msg: 'ok', data: null });
        })
    },
    getHeroById: (req, res) => {
        //根据id查询英雄
        const id = req.params.id;
        const sql = 'select * from heros where id=?';
        conn.query(sql, id, (err, result) => {
            //如果读取数据失败，则返回一个失败的结果
            if (err) return res.send({ status: 500, msg: err.message, data: null })
                //如果读取成功
            res.send({ status: 200, msg: 'ok', data: result });
        })
    },
    updateHeroById: (req, res) => {
        //根据id更新英雄
        const id = req.params.id;
        const newInfo = req.body;
        const sql = 'update heros set ? where id=?';
        conn.query(sql, [newInfo, id], (err, result) => {
            //如果读取数据失败，则返回一个失败的结果
            if (err) return res.send({ status: 500, msg: err.message, data: null })
                //如果读取成功
            res.send({ status: 200, msg: 'ok', data: result });
        })
    },
    deleteHeroById: (req, res) => {
        //根据删除英雄
        const id = req.params.id;
        const sql = 'delete heros where id=?';
        conn.query(sql, id, (err, result) => {
            //如果读取数据失败，则返回一个失败的结果
            if (err) return res.send({ status: 500, msg: err.message, data: null })
                //如果读取成功
            res.send({ status: 200, msg: 'ok', data: null });
        })
    }
}