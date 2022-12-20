const express=require('express')
const router=express.Router()
const middleware = require('../middleware/authMiddleware')
const {addCommand,getCommand, updateCommand,deleteCommand} = require('../controlers/CommandControler')
const middlewareadmin= require('../middleware/authMiddlewarea')

router.get('/getcommand',middleware,middlewareadmin,getCommand)
router.post('/newcommand',middleware,middlewareadmin,addCommand)
router.post('/:commandId/updcommand',middleware,middlewareadmin,updateCommand)
router.get('/:commandId/delcommand',middleware,middlewareadmin,deleteCommand)

module.exports=router