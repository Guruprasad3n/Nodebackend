const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./Model/userModel");
const PORT = 8080;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", async (req, res) => res.send("Welcome to Home page"));

app.post("/signup", async (req, res) => {
 try{
    const { name, email, password } = req.body;
    const user = new userModel({ name, email, password });
    await user.save();
    return res.status(201).send("User Signup Successully");
 }
 catch(e){
    res.status(404).send({message:"User already Exist"})
 }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email, password });
  if (user) {
    return res
      .status(200)
      .send("Login Successful");
  }
  else{
    return res.send(401).status("Invalid Userid or Password")
  }
});

// app.post("/calculateBMI ", (req, res)=>{

// })
mongoose.connect(`mongodb+srv://mock11:mock11@cluster0.qnjmpba.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    mongoose.set('strictQuery', false);
    app.listen(PORT, (req, res) => {
      console.log("Port started at http://localhost:8080 ");
    });
})
