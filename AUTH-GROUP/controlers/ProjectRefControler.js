const Project = require('../models/ProjectRefModel')
const config = require('config')
const cloudinary =require('cloudinary').v2

cloudinary.config({
    cloud_name:config.get('CLOUDINARY.CLOUD_NAME'),
    api_key:config.get('CLOUDINARY.API_KEY'),
    api_secret:config.get('CLOUDINARY.API_SECRET'),
});
// @ post new product & return token
// @ route Post/api/product/newproduct
// @access private/admin

const addProject = async (req,res)=>{
    try {
        const newBody = JSON.parse(req.body.info)
        // const imagePath=`http://localhost:5000/uploads/${req.file.filename}`;
        const imageInfo = await cloudinary.uploader.upload(req.file.path)
        const newProject = await Project.create({
            image:{imageURL:imageInfo.url, public_id:imageInfo.public_id},
            title:newBody.title,
            description:newBody.description
        });
        res.json(newProject)
    } catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }
}

// @ get product & return token
// @ route Get/api/product/getproduct
// @access public
const getProject = async (req,res)=>{
    
    try {
        const projects = await Project.find({})
        res.json(projects)
    } catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }
};

// @ get product & return token
// @ route put/api/product/updatProduct
// @access private/admin
const updateProject = async (req,res)=>{
    try {
        // const {image,title,description}=req.body
       
        // await Project.findByIdAndUpdate({_id:req.params.projectId},{image,title,description})
        // res.json({msg:"updated"})
        const newBody = JSON.parse(req.body.info)
        const imageInfo = await cloudinary.uploader.upload(req.file.path)
        await Project.findByIdAndUpdate({_id:req.params.projectId},{newBody})

        await Project.updateOne({
            image:{imageURL:imageInfo.url, public_id:imageInfo.public_id},
            title:newBody.title,
            description:newBody.description
        });
        res.json({ message:'Your Project has updated'})
    } catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }
};
// @ delete product & return token
// @ route delete/api/product/deletProduct
// @access private/admin
const deleteProject = async (req,res)=>{
    try {
        const product = await Project.findById(req.params.projectId)
        await Project.findByIdAndDelete(req.params.projectId)
        res.json({msg:'project deleted'})
    } catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }
};



module.exports={addProject,getProject,updateProject,deleteProject}