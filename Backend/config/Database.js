const mongoose=require("mongoose")
require("dotenv").config()

const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports= dbConnect;