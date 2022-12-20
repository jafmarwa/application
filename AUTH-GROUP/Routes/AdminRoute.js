const express=require('express')
const router=express.Router()
const {register,login,loadAdminInfo}=require('../controlers/AdminContoler')
const middlewareadmin = require('../middleware/authMiddlewarea')

router.post('/register',register)
router.post('/login',login)
router.get('/loadadmin',middlewareadmin,loadAdminInfo)


module.exports=router




