const express=require("express")
const { getAllData, createCardData, deleteCardData, editCardData, searchData, itemSearchQuery } = require("../controller/dataCardController")
const router=express.Router()

router.get("/getAllData",getAllData)
router.post("/searchData",searchData)
router.post("/createData",createCardData)
router.delete("/deleteData",deleteCardData)
router.post("/editData",editCardData)
router.post("/itemSearchQuery",itemSearchQuery)

module.exports=router;