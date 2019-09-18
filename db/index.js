const mysql = require("mysql");
module.exports = (config) => {

  if (!config.database) {
    throw 'database is required'
  }

  // 创建 mysql 连接池并配置参数
  const pool = mysql.createPool({
    host: config.host || '127.0.0.1', // 主机地址
    port: config.port || 3306, // 端口
    user: config.user || "root", // 数据库访问账号
    password: config.password || "123456", // 数据库访问密码
    database: config.database, // 要访问的数据库
    charset: config.charset || "UTF8_GENERAL_CI", // 字符编码 ( 必须大写 )
    typeCast: config.typeCast || true, // 是否把结果值转换为原生的 javascript 类型
    supportBigNumbers: true, // 处理大数字 (bigint, decimal), 需要开启 ( 结合 bigNumberStrings 使用 )
    bigNumberStrings: true, // 大数字 (bigint, decimal) 值转换为javascript字符对象串
    multipleStatements: true, // 允许每个mysql语句有多条查询
    connectTimeout: config.connectTimeout || 5000, // 数据库连接超时时间, 默认无超时
  });
  pool.connectionLimit = config.connectionLimit || 10; // 连接池中可以存放的最大连接数量
  pool.waitForConnections = true; // 连接使用量超负荷是否等待, false 会报错
  pool.queueLimit = config.queueLimit || 0; // 每个连接可操作的 列数 上限, 0 为没有上限


  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        console.log("Database Connection Failed !");
        reject(err)
      } else {
        console.log("Database Connection Success !");
        resolve(conn);
      }
    });
  });
};