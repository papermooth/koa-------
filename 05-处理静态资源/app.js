const Koa = require('koa')
const app = new Koa()
const path = require('path')
const fs = require('fs')


// function getImageFile(filePath){
//   return new Promise((resolve,reject)=>{
//     fs.readFile(path.join(__dirname,filePath),(err,data)=>{
//       if(err) return reject(err)
//       resolve(data)
//     })
//   })
// }

// 获取静态资源文件的
function getImageFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err)
      } else {
        // 这里保持 Buffer 格式数据，因为图片是二进制数据，不要转成字符串
        resolve(data)
      }
    })
  })
}

app.use(async (ctx)=>{
  // 【重要】正确设置静态资源的 Content-Type 响应头，否则在浏览器中只会下载文件，不能查看到图片
  ctx.set('Content-Type', 'image/jpeg')
  // 在响应体中设置读取到的图片文件数据
  ctx.body = await getImageFile('./static/01.jpg')
})
  // 4. 启动服务
  app.listen(3000, () => {

    console.log('服务器启动成功')
  })
  