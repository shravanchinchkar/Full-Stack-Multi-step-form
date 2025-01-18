
const express=require("express");
const cors=require("cors")
const { User, plans, addons } = require("./db/database");

const app=express();

app.use(cors());

/*
const user={
    name:"Shravan",
    email:"shravanchichkar@gamil.com",
    phone:"9527484498",
    monthly:true,
    yearly:false,
    plan:"Arcade",
    planPerMonth:9
    planPerYear:90,
    addons:["online Services","Larger Storage"]
    addonsPerMonth:1,
    addonsPerYear10:
}
*/

app.use(express.json())

app.post("/user",async(req,res)=>{
    const userPayload=req.body;

    await User.create({
        name:userPayload.name,
        email:userPayload.email,
        phone:userPayload.phone
    })
    res.json({
        msg:"todo Created"
    })

})

app.get("/selectPlan",async(req,res)=>{
    const plan=await plans.find({});
    res.json({
        plan:plan
    })
})

app.get("/addons",async(req,res)=>{
    const addOns=await addons.find({});
    return res.json({
        addon:addOns,
    })
})


app.listen(3000);