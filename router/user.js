const express = require('express')
const controller = require('../controller/user')

// 创建路由对象
const router = express.Router()

// 注册
router.post('/register', controller.register)

// 登录
router.post('/login', controller.login)

module.exports = router