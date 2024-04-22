const Koa = require('koa')
const app = new Koa()
const path = require('path')
const fs = require('fs')

// function getHTMLFile(filePath){
//   return new Promise((resolve,reject)=>{
//     fs.readFile(path.join(__dirname,filePath),(err,data)=>{
//       if(err) return reject(error)
//       resolve(data.toString())
//     })
//   })
// }


// 读取 html 文件的工具函数
function getHTMLFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err)
      } else {
	    // 读取的文件数据是 Buffer 形式，要用 toString() 转成字符串
        resolve(data.toString())
      }
    })
  })
}

app.use(async (ctx)=>{
  ctx.body = await getHTMLFile('./test.html')
})
  // 4. 启动服务
  app.listen(3000, () => {

    console.log('服务器启动成功')
  })
  