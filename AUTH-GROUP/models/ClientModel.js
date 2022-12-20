const mongoose=require('mongoose')

const ClientSchema=mongoose.Schema({

    firstNameClient:{
        type:String,
        required:true
    },
    lastNameClient:{
        type:String,
        required:true
    },
    telephone:{
        type:Number,
        required:true},
    adress:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        match:(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    
    
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
})

module.exports=mongoose.model('user',ClientSchema)