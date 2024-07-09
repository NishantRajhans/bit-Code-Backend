const QuestionSchema=require('../Schema/QuestionSchema')
const path = require('path');
require("dotenv").config();
exports.GetNeetCodeSheet=async(req,res)=>{
    try{
        const Questions = await QuestionSchema.find({ Tag: "NeetCode" }).exec();
        return res.status(200).json({
            success: true,
            message:"Get NeetCode Questions successfully",
            Questions: Questions
        })
    }catch(err){
        return res.status(200).json({
            success: false,
            message:"Error in GetNeetCodeSheet"
        })
    }
}
exports.GetStriverSheet=async(req,res)=>{
    try{
         const Questions=await QuestionSchema.find({Tag:"Striver"}).exec();
        return res.status(200).json({
            success: true,
            message:"Get Striver Questions successfully",
            Questions: Questions
        })
    }catch(err){
        return res.status(200).json({
            success: false,
            message:"Error in GetStriverSheet"
        })
    }
}
exports.GetLoveBubberSheet=async(req,res)=>{
    try{
 const Questions=await QuestionSchema.find({Tag:"LoveBubber"}).exec();
        return res.status(200).json({
            success: true,
            message:"Get LoveBubber Questions successfully",
            Questions: Questions
        })
    }catch(err){
        return res.status(200).json({
            success: false,
            message:"Error in GetLoveBubberSheet"
        })
    }
}
exports.GetCSES_ProblemSet=async(req,res)=>{
    try{
        const Questions=await QuestionSchema.find({Tag:"CSES"}).exec();
        return res.status(200).json({
            success: true,
            message:"Get CSES Questions successfully",
            Questions: Questions
        })
    }catch(err){
        return res.status(200).json({
            success: false,
            message:"Error in GetCSES_ProblemSet"
        })
    }
}
exports.GetSeniorSheet=async(req,res)=>{
    try{
 const Questions=await QuestionSchema.find({Tag:"Senior"}).exec();
        return res.status(200).json({
            success: true,
            message:"Get Senior Questions successfully",
            Questions: Questions
        })
    }catch(err){
        return res.status(200).json({
            success: false,
            message:"Error in GetSeniorSheet"
        })
    }
}
exports.GetA2OJQuestions=async(req,res)=>{
    try{
 const Questions=await QuestionSchema.find({Tag:"A2OJ"}).exec();
        return res.status(200).json({
            success: true,
            message:"Get A2OJ Questions successfully",
            Questions: Questions
        })
    }catch(err){
        return res.status(200).json({
            success: false,
            message:"Error in GetA2OJQuestions"
        })
    }
}

