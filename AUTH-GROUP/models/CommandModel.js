const mongoose=require('mongoose')

const CommandSchema= mongoose.Schema({
    
    fulltNameClient:{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    commandDescription:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    advancePayment:{
        type:String,
        required:true
    },
    leftToPay:{
        type:String,
        required:true
    },
    dateToTakeOrder:{
        type:String,
        required:true
    },
    deleveryDate:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('command',CommandSchema)