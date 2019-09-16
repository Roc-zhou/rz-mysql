# 基于node的 mysql方法封装接口

### 安装
```js
npm install --save rz-mysql or yarn add rz-mysql
```

### 使用
```js
const Query = require('rz-mysql')

const config = {
  host: '', // 主机地址
	port: 3306, // 端口
	user: "root", // 数据库访问账号
	password: "", // 数据库访问密码
	database: "" // 要访问的数据库
}

const query = new Query(config) // 返回的是一个 promise

const m = async () => {
  const s = await query.sql(`SELECT * from user`);
  console.log(s);
}
m()
```

### config 可配置项
```js
const config = {
  host, // 必填 主机地址
  port, // 必填 端口
  user, // 必填 数据库访问账号
  password, // 必填 数据库访问密码
  database, // 必填 要访问的数据库
  charset, // 字符编码 ( 必须大写 ) 默认 UTF8_GENERAL_CI
  typeCast, // 是否把结果值转换为原生的 javascript 类型 默认 true
  connectTimeout, // 数据库连接超时时间, 默认 5000
  connectionLimit, // 连接池中可以存放的最大连接数量 默认 10
  queueLimit, // 每个连接可操作的列数上限, 0 为没有上限 默认 0
}
```
