
// const { default: mongoose } = require("mongoose");

const {Schema, model } = require("mongoose");

const bmiSchema = new Schema({
    height:{
        type:Number,
        require:true
    },
    weight:{
        type:Number,
        require:true,
    },
    _id:{
        type:String,
        require:true
    },
    BMI:{
        type:String
    }
})

const BMIModel = model("bmi", bmiSchema)
module.exports = BMIModel