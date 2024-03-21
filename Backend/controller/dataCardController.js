const CardData=require("../models/dataCardModel")


exports.getAllData=async(req,res)=>{
    try {
        const card=await CardData.find();
        if(!card){
           return res.status(403).json({
                success:false,
                message:"Data not found"
            })
        }
        return res.status(200).json({
            success:true,
            data:card
        })
    } catch (error) {
        console.log(error);
    }
}

exports.createCardData=async(req,res)=>{
    try {
        const {name,nameOfCourt,prevDate,caseNumber,positionStage,nextDate,phoneNumber,location}=req.body;
        if(!name){
            return res.status(400).json({
                success:false,
                message:"All fileds are rquired!"
            })
        }
        const newCard=await CardData.create({name,nameOfCourt,prevDate,caseNumber,positionStage,nextDate,phoneNumber,location})
        return res.status(200).json({
            success:true,
            message:"Card created",
            data:newCard
        })
    } catch (error) {
        console.log(error);
    }
}


exports.deleteCardData=async(req,res)=>{
    try {
        const {id}=req.body
        console.log(id);
        const card=await CardData.findById(id)
        if(!card){
            return res.status(403).json({
                success:false,
                message:"Card doesn't exists!"
            })
        }
        await CardData.findByIdAndDelete({_id:id})
        return res.status(200).json({
            success:true,
            message:"Data Deleted"
        })
    } catch (error) {
        console.log(error);
    }
}


exports.editCardData=async(req,res)=>{
    try {
        console.log("working");
        const {name,nameOfCourt,prevDate,caseNumber,positionStage,nextDate,phoneNumber,location}=req.body
        console.log(name,nameOfCourt,prevDate,caseNumber,positionStage,nextDate,phoneNumber,location);
        const {cardId}=req.body
        console.log(cardId);
        if(!cardId){
            console.log("yha fta id me");
            return res.status(300).json({
                success:false,
                message:"Card id missing!"
            })
        }
        const updatedCard=await CardData.findById({_id:cardId})
        updatedCard.name=name,
        updatedCard.nameOfCourt=nameOfCourt,
        updatedCard.caseNumber=caseNumber,
        updatedCard.positionStage=positionStage,
        updatedCard.phoneNumber=phoneNumber,
        updatedCard.location=location,
        updatedCard.prevDate=prevDate?(prevDate):(updatedCard.prevDate),
        updatedCard.nextDate=nextDate?(nextDate):(updatedCard.nextDate)

        updatedCard.save()
        return res.status(200).json({
            success:true,
            message:"Data Updated",
            data:updatedCard
            // data:updatedCard
        })
    } catch (error) {
        console.log(error);
    }
}


exports.searchData=async(req,res)=>{
    try {   
        const {id}=req.body
       if(id){
        const card=await CardData.findById({_id:id})
        if(!card){
            return res.status(404).json({
                success:false,
                message:"Not data found"
            })
        }
        return res.status(200).json({
            success:true,
            data:card
        })
       }

    } catch (error) {
        console.log(error);
    }
}

exports.itemSearchQuery=async(req,res)=>{
    try {
        const {selected,searchValue}=req.body
        console.log(selected);
        if(!selected && !searchValue){
            return res.status(401).json({
                success:false,
                message:"All field are rquired!"
            })
        }

        const pipeline = [];
        pipeline.push({
            $match: {
                $or: [
                  { name: searchValue },
                  { nameOfCourt: searchValue },
                  { location: searchValue },
                  { phoneNumber:searchValue},
                  { caseNumber: searchValue},
                  { positionStage: searchValue}
                ]
              }
        })

        const response=await CardData.aggregate(pipeline)
        if(!response){
            return res.status(404).json({
                success:false,
                message:"Data not found!"
            })
        }
        return res.status(200).json({
            success:true,
            data:response
        })
    } catch (error) {
        console.log(error);
    }
}

