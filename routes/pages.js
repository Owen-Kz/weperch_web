const express = require("express");

const router = express.Router();
const bodyParser = require("body-parser");
const explorePage = require("../controllers/explorepage");
 

// router.use(express.json())
// router.use(bodyParser.json()) 
 
router.get("/", (req,res) =>{    
    res.render("welcome")
}) 

router.get("/explore", explorePage)




router.get("*", (req,res) =>{
    res.json({status:404, message:"Page Not Found"})
})


module.exports = router