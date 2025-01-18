const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://shravanchinchkar:Shravan%40132610@shrav.wg75m.mongodb.net/multiStepform"
);


//following is the schema for the user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  monthly: {
    type: Boolean,
    default: true, // Default value if not provided
  },
  yearly: {
    type: Boolean,
    default: false,
  },
  plan: {
    type: String,
    default: "", // Replace 'OtherPlan' with actual valid plans
  },
  planPerMonth: Number,
  planPerYear: Number,
  addons: {
    type: [String], // Array of strings
    default: [],
  },
  addonsPerMonth: Number,
  addonsPerYear: Number,
});

//following is the schema for the plan section
const plansSchema = new mongoose.Schema({
  planImage: String,
  planName: String,
  amountPerMonth: Number,
  amountPerYear: Number,
  message: String,
});


//following is the schema for the addons section
const addonsSchema=new mongoose.Schema({
addOnName:String,
addOnsDescription:String,
addOnsPricePerMonth:Number,
addOnsPricePerYear:Number,
})

const User = mongoose.model("user", userSchema);
const plans=mongoose.model("plandatas",plansSchema)
const addons=mongoose.model("addonsdatas",addonsSchema)

module.exports = {
  User,
  plans,
  addons
};
