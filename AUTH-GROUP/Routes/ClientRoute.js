const express=require('express')
const router=express.Router()
const {register,login,loadClientInfo} = require ('../controlers/ClientControler')
const middleware = require('../middleware/authMiddleware')
const {body} = require ('express-validator')
const validation = require('../middleware/expressValidation')
// const Client =('../models/ClientModel')

// router.get('/deleteAll',async(req,res)=>{
//     await Client.deleteMany({})
//     res.send('done')
// })
router.post('/register',body('password').isStrongPassword([{minLength:7,minLowercase:1, minUppercase:1}]),register)
router.post('/login',validation,login)
router.get('/loadclient',middleware,loadClientInfo)

module.exports=router