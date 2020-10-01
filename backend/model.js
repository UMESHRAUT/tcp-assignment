const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const StorySchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model("Story",StorySchema)