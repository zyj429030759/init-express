const express = require('express')
const cors = require('cors')
const userRouter = require('./router/user')

/// 创建服务器实例对象
const app = express()

// 配置cors中间件，解决跨域问题
app.use(cors())
// 配置解析表单数据的中间件(application/x-www-form-urlencoded格式)，否则req.body拿不到数据
app.use(express.urlencoded({ extended: false }))
// 配置解析表单数据为application/json 格式的内置中间件
// app.use(express.json())

// 注册用户路由模块
app.use('/api', userRouter)




// 启动服务器
app.listen(3002, () => {
    console.log('app running at http://127.0.0.1:3002')
})