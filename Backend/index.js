const express=require("express")
const app=express()
const cors=require("cors")
const dbConnect=require("./config/Database")
const cardRoute=require("./routes/dataCardRoute")
require("dotenv").config()
const PORT=process.env.PORT || 3000

dbConnect().then(()=>{

app.use(express.json())

app.use(cors({
    origin:"https://curd-operations-frontend.vercel.app",
    credentials:true
}))
app.use("/api/v1/card/",cardRoute)

app.get("/",function(req,res){
    res.send("Working")
})

app.listen(PORT,()=>{
    console.log("Server Started");
})
})

