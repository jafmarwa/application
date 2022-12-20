
const jwt = require('jsonwebtoken')
const config = require('config')

const middleware = async(req,res,next)=>{
try {// config.get('JWT_CONFIG.SECRET_KEY')
    const verifyToken = jwt.verify(req.headers.token,config.get('JWT_CONFIG.SECRET_KEY'))
    req.clientId = verifyToken.id
    next()
} catch (err) {
    res.status(400).json({errors:[{msg:err.message}]})
}
}


module.exports = middleware


