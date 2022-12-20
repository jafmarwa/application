const mongoose=require('mongoose')

const AdminSchema=mongoose.Schema({

    firstNameAdmin:{
        type:String,
        required:true
    },
    lastNameAdmin:{
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
        default:'admin'
    }
})

module.exports=mongoose.model('admin',AdminSchema)