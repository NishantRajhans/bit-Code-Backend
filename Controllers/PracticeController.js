const { group } = require("console");
const QuestionSchema = require("../Schema/QuestionSchema");
const path = require("path");
require("dotenv").config();
exports.GetNeetCodeSheet = async (req, res) => {
  try {
    const Questions = await QuestionSchema.find({ Tag: "NeetCode" }).exec();
    const groupedQuestions = {};
    Questions.forEach((question) => {
      const topic = question.Topic;
      if (!groupedQuestions[topic]) {
        groupedQuestions[topic] = [];
      }
      groupedQuestions[topic].push(question);
    });
    return res.status(200).json({
      success: true,
      message: "Get NeetCode Questions successfully",
      groupedQuestions: groupedQuestions,
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: "Error in GetNeetCodeSheet",
    });
  }
};
exports.GetStriverSheet = async (req, res) => {
  try {
    const Questions = await QuestionSchema.find({ Tag: "Striver" }).exec();
    const groupedQuestions = {};
    Questions.forEach((question) => {
      const topic = question.Topic;
      if (!groupedQuestions[topic]) {
        groupedQuestions[topic] = [];
      }
      groupedQuestions[topic].push(question);
    });
    return res.status(200).json({
      success: true,
      message: "Get Striver Questions successfully",
      groupedQuestions: groupedQuestions,
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: "Error in GetStriverSheet",
    });
  }
};
exports.GetLoveBubberSheet = async (req, res) => {
  try {
    const Questions = await QuestionSchema.find({ Tag: "LoveBubber" }).exec();
    const groupedQuestions = {};
    Questions.forEach((question) => {
      const topic = question.Topic;
      if (!groupedQuestions[topic]) {
        groupedQuestions[topic] = [];
      }
      groupedQuestions[topic].push(question);
    });
    return res.status(200).json({
      success: true,
      message: "Get LoveBubber Questions successfully",
      groupedQuestions: groupedQuestions,
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: "Error in GetLoveBubberSheet",
    });
  }
};
exports.GetCSES_ProblemSet = async (req, res) => {
  try {
    const Questions = await QuestionSchema.find({ Tag: "CSES" }).exec();
    const groupedQuestions = {};
    Questions.forEach((question) => {
      const topic = question.Topic;
      if (!groupedQuestions[topic]) {
        groupedQuestions[topic] = [];
      }
      groupedQuestions[topic].push(question);
    });
    return res.status(200).json({
      success: true,
      message: "Get CSES Questions successfully",
      groupedQuestions: groupedQuestions,
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: "Error in GetCSES_ProblemSet",
    });
  }
};
exports.GetSeniorSheet = async (req, res) => {
  try {
    const Questions = await QuestionSchema.find({ Tag: "Senior" }).exec();
    const groupedQuestions = {};
    Questions.forEach((question) => {
      const topic = question.Topic;
      if (!groupedQuestions[topic]) {
        groupedQuestions[topic] = [];
      }
      groupedQuestions[topic].push(question);
    });
    return res.status(200).json({
      success: true,
      message: "Get Senior Questions successfully",
      groupedQuestions: groupedQuestions,
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: "Error in GetSeniorSheet",
    });
  }
};
exports.GetA2OJQuestions = async (req, res) => {
  try {
    const Questions = await QuestionSchema.find({ Tag: "A2OJ" }).exec();
    const groupedQuestions = {};
    Questions.forEach((question) => {
      const topic = question.Topic;
      if (!groupedQuestions[topic]) {
        groupedQuestions[topic] = [];
      }
      groupedQuestions[topic].push(question);
    });
    return res.status(200).json({
      success: true,
      message: "Get A2OJ Questions successfully",
      groupedQuestions: groupedQuestions,
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: "Error in GetA2OJQuestions",
    });
  }
};
