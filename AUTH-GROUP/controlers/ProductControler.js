const Product = require('../models/ProductModel')


// @ post new product & return token
// @ route Post/api/product/newproduct
// @access private/admin

const addProduct = async (req,res)=>{
    
    try {
        const {image,title,description} = req.body
        const newProduct = await Product.create({
            image:image,
            title:title,
            description:description
        })
        res.json(newProduct)
    } catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }
}

// @ get product & return token
// @ route Get/api/product/getproduct
// @access public
const getProduct = async (req,res)=>{
    
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }
};

// @ get product & return token
// @ route put/api/product/updatProduct
// @access private/admin
const updateProduct = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.productId)
        await Product.findByIdAndUpdate(req.params.productId,{...req.body})
        res.json({msg:'product updated'})
    } catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }
};
// @ delete product & return token
// @ route delete/api/product/deletProduct
// @access private/admin
const deleteProduct = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.productId)
        await Product.findByIdAndDelete(req.params.productId)
        res.json({msg:'product deleted'})
    } catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }
};



module.exports={addProduct,getProduct,updateProduct,deleteProduct}