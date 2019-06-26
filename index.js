const Koa = require('koa');
const json = require('koa-json'); 

const app = new Koa();


//JSON Prettier Middelware
app.use(json()); 

app.use(async ctx => {
    ctx.body = { msg: 'Hello world'}
})

app.listen(3000, () => {
    console.log('Servidor lanzado en el 3000 🚀')
})