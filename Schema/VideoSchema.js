const mongoose = require('mongoose')
const VideoSchema = new mongoose.Schema(
{
    VideoName:{
        required: true,
        type:String
    },
    VideoLink:{
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
}
)
module.exports =mongoose.model("VideoSchema",VideoSchema);