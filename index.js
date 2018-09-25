// 引入koa
const Koa =require('koa')
// 声明一个变量app
const app=new Koa()

// 使用app,语法糖async，ctx是koa自带的，response和request
app.use(async(ctx)=>{
    ctx.body='hello koa2'
})
//设置监听端口
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000');