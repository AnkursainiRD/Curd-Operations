const mongoose=require("mongoose")
const dataCardSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    prevDate:{
        type:Date,
        required:true
    },
    nameOfCourt:{
        type:String,
        required:true
    },
    caseNumber:{
        type:String,
        required:true
    },
    positionStage:{
        type:String,
        required:true
    },
    nextDate:{
        type:Date,
        required:true
    },
    phoneNumber:{
        type:Number,
    },
    location:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("dataCard",dataCardSchema)