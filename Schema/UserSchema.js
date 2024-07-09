const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema(
{
    FirstName:{
        required: true,
        type:String
    },
    LastName:{
        required: true,
        type:String
    },
    Email:{
        type:String,
        required: true
    },
    Password:{
        type:String,
        required: true
    },
    QuestionDone:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"QuestionSchema"
        }
    ],
    QuestionMark:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"QuestionSchema"
        }
    ],
    Token:{
        type:String,
    },
    Verified:{
        type:Boolean,
        default:false
    }
}
)
module.exports =mongoose.model("UserSchema",UserSchema);