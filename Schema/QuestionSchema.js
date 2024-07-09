const mongoose = require('mongoose')
const QuestionSchema = new mongoose.Schema(
{
    QuestionName:{
        required: true,
        type:String
    },
    QuestionLink:{
        required: true,
        type:String
    },
    Topic:{
        required: true,
        type:String
    },
    Tag:{
        required: true,
        type:String
    },
    Dificulty:{
        type:String,
        required: true
    },
    VideoLink:{
        type:String,
        required: true
    },
    CodeLink:{
        type:String,
        required: true
    },
}
)
module.exports =mongoose.model("QuestionSchema",QuestionSchema);