const Person = require ('../models/ClientModel') 
const middlewareadmin = async (req,res,next)=>{
    try {
       const client = await Person.findById(req.clientId);
       if (client.role === 'admin') next () ;
       else res.status(401).json({msg: 'you are not autorized'})
    } catch (error) {
        res.status(400).json({msg:`unvalid token ${error}`})
        
    }
}
module.exports = middlewareadmin
