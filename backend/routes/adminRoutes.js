

const express=require("express");
const { registerAdmin, loginAdmin } = require("../controllers/adminController");

const router=express.Router();

 router.post("/register",registerAdmin)

 router.post("/login",loginAdmin)
  

 //admin profile
 router.post("/profile")

module.exports=router;