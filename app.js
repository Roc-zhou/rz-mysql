const mysql = require('./db');


class Query {
  constructor(config) {
    this.config = config;
  }

  async sql(sql, values) {
    // 获取连接
    let conn = await mysql(this.config);
    // 开启事务
    await new Promise((resolve, reject) => {
      conn.beginTransaction(err => {
        if (err) {
          console.log(err);
          reject(err)
        } else {
          resolve()
        }
      })
    })

    let result = await new Promise((resolve, reject) => {
      conn.query(sql, values, (err, ret) => {
        if (err) {
          // 回滚之前的数据库操作, 直至碰到 beginTransaction
          return conn.rollback(() => {
            console.log(err);
            resolve(err);
          });
        }
        resolve(JSON.parse(JSON.stringify(ret)));
      });
    });
    // 关闭事务
    await new Promise((resolve, reject) => {
      conn.commit(err => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve();
        }
      });
    });
    conn.release();
    return result
  }

}

module.exports = Query