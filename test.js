const Query = require('./app');

const query = new Query({
  host: "127.0.0.1", // 主机地址
  port: 3306, // 端口
  user: "root", // 数据库访问账号
  password: "123456", // 数据库访问密码
  database: "zhou", // 要访问的数据库
  charset: "UTF8_GENERAL_CI", // 字符编码 ( 必须大写 )
  typeCast: true, // 是否把结果值转换为原生的 javascript 类型
  supportBigNumbers: true, // 处理大数字 (bigint, decimal), 需要开启 ( 结合 bigNumberStrings 使用 )
  bigNumberStrings: true, // 大数字 (bigint, decimal) 值转换为javascript字符对象串
  multipleStatements: true, // 允许每个mysql语句有多条查询
  connectTimeout: 5000, // 数据库连接超时时间, 默认无超时
})

const m = async () => {
  const s = await query.sql(`SELECT * from user`);
  console.log(s);
}

m()