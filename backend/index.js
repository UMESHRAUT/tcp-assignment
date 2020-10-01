const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Story=require('./model')
const cors=require('cors')

app.use(express.json())

mongoose.connect("mongodb://localhost/story",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log(err);
    }else{
    console.log("mongo db connected");
    }
})

app.use(cors())

app.get('/',(req,res)=>{
    Story.find({}).then(stories=>res.json(stories)).catch(err=>res.json(err))
})

app.post('/',(req,res)=>{
    console.log(req.body.data);
    const newStory=new Story(req.body.data);
    newStory.save().then(()=>res.json({Status:"saved"})).catch(err=>res.json(err));
})

app.listen(5000,()=>{
    console.log("server is running");
})

