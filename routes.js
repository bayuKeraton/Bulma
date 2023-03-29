const express = require("express");
const router = express.Router();

const app = express();

app.set("view engine","ejs");

router.get('/',(req,res)=>{
    res.render("index");
})
router.get('/about',(req,res)=>{
    res.send("about");
})



module.exports = router;