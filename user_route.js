const express = require('express')
const router = express.Router()
const { Register,
    Login,
   
 } = require('../Controllers/user_controller')
const UserAuth = require('../Middlewar/user_auth')

router.post('/register', Register)

router.post('/login', Login)





module.exports = router

