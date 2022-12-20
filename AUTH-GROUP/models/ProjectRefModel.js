const mongoose=require('mongoose')

const ProjectSchema = mongoose.Schema({

    image:{
        imageURL:String,
        public_id:String,
    },

    title:{
        type:String,
        required:true
    },
    
    description:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model('project',ProjectSchema)