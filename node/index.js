const Koa = require('koa')
const app = new Koa()
const router = require('./routes/index')
const koaBody = require('koa-body')




app.use(koaBody({
  multipart:true, // 支持文件上传
  formidable:{
    uploadDir:'./upload', // 设置文件上传目录
    keepExtensions: true,    // 保持文件的后缀
    maxFieldsSize:2 * 1024 * 1024, // 文件上传大小
  }
}));

app.use(router.routes()).use(router.allowedMethods())



app.listen(3000,() => {
  console.log('3000端口已启动')
})