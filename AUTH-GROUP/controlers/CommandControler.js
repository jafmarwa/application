const Command = require('../models/CommandModel')
const jwt = require('jsonwebtoken')
const config = require('config')

// @ post new Command & return token
// @ route Post/api/command/newcommand
// @access private/admin

const addCommand = async (req,res)=>{
    try {
        const {fulltNameClient,adress,phone,commandDescription,amount,advancePayment,leftToPay,dateToTakeOrder,deleveryDate} = req.body
        const newCommand = await Command.create({fulltNameClient,adress,phone,commandDescription,amount,advancePayment,leftToPay,dateToTakeOrder,deleveryDate})
        res.json(newCommand)
    } catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }

}


// @ get commands & return token
// @ route Get/api/product/getcommand
// @access private/admin
const getCommand = async (req,res)=>{
    try {
        const commands = await Command.find({})
        res.json(commands)
    } catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }
}

// @ update product & return token
// @ route put/api/command/updatCommand
// @access private/admin
/* const updateCommand = async (req,res)=>{
    try {
        const command = await Command.findById(req.params.commandId)
        await command.findByIdAndUpdate(req.params.commandId,{...req.body})
        res.json({msg:'command updated'})
    } catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }
}; */

const updateCommand = async (req,res)=>{
    try{
        const updCmd = await Command.findByIdAndUpdate(req.params.commandId,{...req.body})
        res.json(updCmd)
    }catch(err){
        res.status(500).json({errors:[{msg:err.message}]})
    }
}
     
// @ delete command & return token
// @ route delete/api/command/deletcommand
// @access private/admin
const deleteCommand = async (req,res)=>{
    try {
        const command = await Command.findById(req.params.commandId)
        await Command.findByIdAndDelete(req.params.commandId)
        res.json({msg:'product deleted'})
    } catch (err) {
        res.status(500).json({errors:[{msg:err.message}]})
    }
};


module.exports={addCommand,getCommand,updateCommand,deleteCommand}
