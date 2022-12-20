const Admin = require('../models/AdminModel')
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcrypt')

// register new admin & return token
// @ route Post/api/admin/register
// @access private - admin

const register=async(req,res)=>{

    try{
const {firstNameAdmin,lastNameAdmin,email,password}=req.body
const hashedPassword = await bcrypt.hash(password,10)
const newAdmin =  await Admin.create({firstNameAdmin,lastNameAdmin,email,password:hashedPassword})
// const token=jwt.sign({payload,secret-key})
const token = jwt.sign({id:newAdmin._id,email:newAdmin.email},config.get('JWT_CONFIG.SECRET_KEY'))
res.json({msg:'admin created',newAdmin,token})

    }catch(err){
        res.status(500).json({errors:[{msg:err.message}]})
    }
}


// @  new admin can login & return token
// @ route Post/api/admin/login
// @access private - admin

const login = async(req,res)=>{

    try{
const {email,password} = req.body
const existAdmin = await Admin.findOne({email})
if(!existAdmin) return res.status(404).json({msg:'you should register first'})
const verifyPassword = await bcrypt.compare(password,existAdmin.password)
if(!verifyPassword) return res.status(401).json({msg:'wrong password'})
const token = jwt.sign({id:existAdmin._id,email:email},config.get('JWT_CONFIG.SECRET_KEY'))
res.json({token})

    }catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }
}


// @  desc takes token & return admintinfo
// @ route Get/api/admin/loadadmin
// @access private/admin
const loadAdminInfo = async(req,res)=>{
    try {
        const admin = await Admin.findById(req.adminId)
        res.json(admin)
    } catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }
}

module.exports={register,login,loadAdminInfo}