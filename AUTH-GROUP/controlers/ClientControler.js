const Client = require('../models/ClientModel')
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcrypt')

// @ register new client & return token
// @ route Post/api/client/register
// @access public
const register = async(req,res)=>{
    try{
const {firstNameClient,lastNameClient,telephone,adress,email,password}=req.body
const hashedPassword = await bcrypt.hash(password,10)
const newClient = await Client.create({firstNameClient,lastNameClient,telephone,adress,email,password:hashedPassword})
const token = jwt.sign({id:newClient._id,email:newClient.email},config.get('JWT_CONFIG.SECRET_KEY'))
const filteredClient = {
    firstNameClient,
    lastNameClient,
    telephone,
    adress,email,
    _id:newClient._id,
    role:newClient.role
};
res.json({msg:'client created',newClient,token,Client:filteredClient})
     } catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }
}

// @  new client can login & return token
// @ route Post/api/client/login
// @access public
const login = async(req,res)=>{
    try{
        const {email,password} = req.body
        const existClient = await Client.findOne({email})
        if(!existClient) return res.status(404).json({msg:'you should register first'})
        const verifyPassword = await bcrypt.compare(password,existClient.password)
        if(!verifyPassword) return res.status(401).json({msg:'wrong password'})
        const token = jwt.sign({id:existClient._id,email:email},config.get('JWT_CONFIG.SECRET_KEY'))
        const filteredClient = {
            firstNameClient: existClient.firstNameClient,
            lastNameClient: existClient.lastNameClient,
            email,
            _id: existClient._id,
            role: existClient.role
        };
        res.json({token,Client:filteredClient})

    }catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }
}


// @  desc takes token & return clientinfo
// @ route Get/api/client/loadclient
// @access private/client
const loadClientInfo = async(req,res)=>{
    try {
        const client = await Client.findById(req.clientId)
        console.log(client,Client)
        res.json(client)
    } catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }
}






module.exports={register,login,loadClientInfo}