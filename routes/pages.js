const express = require("express");

const router = express.Router();
const bodyParser = require("body-parser")
 

// router.use(express.json())
// router.use(bodyParser.json()) 
 
router.get("/", (req,res) =>{    
    res.render("welcome")
}) 
 
router.get("/test", (req,res) =>{
    res.render("test")
})



router.get("*", (req,res) =>{
    res.json({status:404, message:"Page Not Found"})
})


module.exports = router