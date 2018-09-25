const koa=require('koa')
// 引入路由
const Router=require('koa-router')

const app=new koa()
// 实例化
const router=new Router()

router.get('/',function(ctx,next){
    ctx.body=ctx.query;
})

app
 .use(router.routes())
 .use(router.allowedMethods())
 app.listen(3000,()=>{
     console.log('port 3000');
 })
