// 1. 引入 koa
const Koa = require('koa')

// 2. 创建 koa 实例
const app = new Koa()

// 3. 创建中间件
app.use(async ctx => {
  let paramStr = ''

  // 1. 监听 node.js 原生 Request 对象的 data 事件，获取请求体数据
  ctx.req.on('data', (data) => {
    // 从请求体中获取数据，并拼接成一整个字符串
    paramStr += data
  })

  // 2. 监听 node.js 原生 Request 对象的 end 事件，结束请求体数据获取
  ctx.req.on('end', () => {
    // paramStr 是查询字符串格式的数据 可以用 new URLSearchParams 解析
    // 语法: var URLSearchParams = new URLSearchParams(init);
    const params = new URLSearchParams(paramStr)
    
    console.log('请求体参数(字符串形式)', paramStr);
    console.log('请求体参数(对象形式)', params);
  })
  })
  
  // 4. 启动服务
  app.listen(3000, () => {
    // http 服务器启动成功后执行本回调函数
    console.log('服务器启动成功')
  })
  