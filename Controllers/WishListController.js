const { group } = require("console");
const UserSchema = require("../Schema/UserSchema");
const path = require("path");
require("dotenv").config();
exports.AddToDoneList=async(req,res)=>{
    try{
        const Id=req.body.Id;
        const check=await UserSchema.findOne({Email:req.User.Email,DoneList:Id})
        if(check){
            return res.status(200).json({
                success: false,
                message:"Item is already present in the DoneList"
            }) 
        }
        const User=await UserSchema.findOneAndUpdate({Email:req.User.Email},{$push:{
            DoneList:Id
        }},{new:true})
        return res.status(200).json({
            success: true,
            message:"Item Successfully Added To DoneList",
            User:User
        })
    }catch(err){
        return res.status(200).json({
            success: false,
            message:"Error in AddToDoneList"
        })
    }
}
exports.RemoveFromDoneList=async(req,res)=>{
    try{
        const Id=req.body.Id;
        const check=await UserSchema.findOne({Email:req.User.Email,DoneList:Id})
        if(!check){
            return res.status(200).json({
                success: false,
                message:"Item is not present in the DoneList"
            }) 
        }
        const User=await UserSchema.findOneAndUpdate({Email:req.User.Email},{$pull:{
            DoneList:Id
        }},{new:true})
        return res.status(200).json({
            success: true,
            message:"Item Successfully Remove From DoneList",
            User:User
        })
    }catch(err){
        return res.status(200).json({
            success: false,
            message:"Error in RemoveFromDoneList"
        })
    }
}
exports.AddToReviewList=async(req,res)=>{
    try{
        const Id=req.body.Id;
        const check=await UserSchema.findOne({Email:req.User.Email,ReviewList:Id})
        if(check){
            return res.status(200).json({
                success: false,
                message:"Item is already present in the ReviewList"
            }) 
        }
        const User=await UserSchema.findOneAndUpdate({Email:req.User.Email},{$push:{
            ReviewList:Id
        }},{new:true})
        return res.status(200).json({
            success: true,
            message:"Item Successfully Added To ReviewList",
            User:User
        })
    }catch(err){
        return res.status(200).json({
            success: false,
            message:"Error in AddToReviewList"
        })
    }
}
exports.RemoveFromReviewList=async(req,res)=>{
    try{
        const Id=req.body.Id;
        const check=await UserSchema.findOne({Email:req.User.Email,DoneList:Id})
        if(!check){
            return res.status(200).json({
                success: false,
                message:"Item is not present in the ReviewList"
            }) 
        }
        const User=await UserSchema.findOneAndUpdate({Email:req.User.Email},{$pull:{
            ReviewList:Id
        }},{new:true})
        return res.status(200).json({
            success: true,
            message:"Item Successfully Remove From ReviewList",
            User:User
        })
    }catch(err){
        return res.status(200).json({
            success: false,
            message:"Error in RemoveFromReviewList"
        })
    }
}
exports.GetDoneList=async(req,res)=>{
    try{
        const User=await UserSchema.find({Email:req.User.Email}).populate("DoneList").exec()
        return res.status(200).json({
            success: true,
            message:"DoneList fetch successfully",
            User:User
        })
    }catch(err){
        return res.status(200).json({
            success: false,
            message:"Error in GetDoneList"
        })
    }
}
