# 基于node的 mysql方法封装接口

> [rz-mysql](http://npmjs.com/package/rz-mysql)

> mysql ^2.17.1

> node v10.0.0
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

const query = new Query(config) 

query.sql(sql,val=[]) // 使用方法 sql 必传，返回 promise


const m = async () => {
  const s = await query.sql(`SELECT * from user`);
  console.log(s);
}
m()
```

### config 可配置项
```js
const config = {
  host, // 主机地址 default 127.0.0.1
  port, // 端口 default 3306
  user, // 数据库访问账号 default root 
  password, // 数据库访问密码 default 123456
  database, // 必填 要访问的数据库
  charset, // 字符编码 ( 必须大写 ) 默认 UTF8_GENERAL_CI
  typeCast, // 是否把结果值转换为原生的 javascript 类型 默认 true
  connectTimeout, // 数据库连接超时时间, 默认 5000
  connectionLimit, // 连接池中可以存放的最大连接数量 默认 10
  queueLimit, // 每个连接可操作的列数上限, 0 为没有上限 默认 0
}
```
