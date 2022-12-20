const express=require('express')
const multer = require('multer')
const router=express.Router()
const middlewareadmin = require('../middleware/authMiddlewarea')
const middleware = require('../middleware/authMiddleware')
const {addProduct,getProduct, updateProduct,deleteProduct} = require('../controlers/ProductControler')




router.post('/newproduct',middleware,middlewareadmin,addProduct)
router.get('/getproduct',getProduct)
router.post('/:productId/updatproduct',middleware,middlewareadmin,updateProduct)
router.get('/:productId/deleteproduct',middleware,middlewareadmin,deleteProduct)



module.exports=router