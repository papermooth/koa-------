// 1. 引入 koa
const Koa = require('koa')

// 2. 创建 koa 实例
const app = new Koa()

// 3. 创建一个中间件，所有的请求都会执行到这个中间件进行处理
//   Koa 提供一个 Context 对象，表示一次对话的上下文（包括 HTTP 请求和 HTTP 回复）。
//   通过加工这个对象，就可以控制返回给用户的内容。
app.use(async ctx => {
    // 方式一：获取对象形式的查询字符串参数
  console.log("查询字符串参数(对象形式)", ctx.request.query)  
  console.log("查询字符串参数(对象形式)", ctx.query) 
  
  // 方式二：获取原始字符串形式的查询字符串参数
  console.log("查询字符串参数(字符串形式)", ctx.querystring)
  console.log("查询字符串参数(字符串形式)", ctx.request.querystring)   
    ctx.response.body = 'Hello,World'
  })
  
  // 4. 启动 koa 实例所关联的 http 服务器，并监听在 3000 端口上向外提供服务
  app.listen(3000, () => {
    // http 服务器启动成功后执行本回调函数
    console.log('服务器启动成功')
  })
  