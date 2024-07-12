const { group } = require("console");
const VideoSchema = require("../Schema/VideoSchema");
const path = require("path");
require("dotenv").config();
exports.GetDSAVideos = async (req, res) => {
  try {
    const Video = await VideoSchema.find({ Tag: "DSA" }).exec();
    const groupedVideo = {};
    Video.forEach((video) => {
      const topic = video.Topic;
      if (!groupedVideo[topic]) {
        groupedVideo[topic] = [];
      }
      groupedVideo[topic].push(video);
    });
    return res.status(200).json({
      success: true,
      message: "Get DSA Videos successfully",
      groupedVideo: groupedVideo,
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: "Error in GetDSAVideos",
    });
  }
};
exports.GetOOPSVideos = async (req, res) => {
    try {
        const Video = await VideoSchema.find({ Tag: "OOPS" }).exec();
        const groupedVideo = {};
        Video.forEach((video) => {
          const topic = video.Topic;
          if (!groupedVideo[topic]) {
            groupedVideo[topic] = [];
          }
          groupedVideo[topic].push(video);
        });
        return res.status(200).json({
          success: true,
          message: "Get OOPS Videos successfully",
          groupedVideo: groupedVideo,
        });
      } catch (err) {
        return res.status(200).json({
          success: false,
          message: "Error in GetOOPSVideos",
        });
      }
};
exports.GetCNVideos = async (req, res) => {
    try {
        const Video = await VideoSchema.find({ Tag: "CN" }).exec();
        const groupedVideo = {};
        Video.forEach((video) => {
          const topic = video.Topic;
          if (!groupedVideo[topic]) {
            groupedVideo[topic] = [];
          }
          groupedVideo[topic].push(video);
        });
        return res.status(200).json({
          success: true,
          message: "Get CN Videos successfully",
          groupedVideo: groupedVideo,
        });
      } catch (err) {
        return res.status(200).json({
          success: false,
          message: "Error in CNVideos",
        });
      }
};
exports.GetOSVideos = async (req, res) => {
    try {
        const Video = await VideoSchema.find({ Tag: "OS" }).exec();
        const groupedVideo = {};
        Video.forEach((video) => {
          const topic = video.Topic;
          if (!groupedVideo[topic]) {
            groupedVideo[topic] = [];
          }
          groupedVideo[topic].push(video);
        });
        return res.status(200).json({
          success: true,
          message: "Get OS Videos successfully",
          groupedVideo: groupedVideo,
        });
      } catch (err) {
        return res.status(200).json({
          success: false,
          message: "Error in GetOSVideos",
        });
      }
};
exports.GetDBMSVideos = async (req, res) => {
    try {
        const Video = await VideoSchema.find({ Tag: "DBMS" }).exec();
        const groupedVideo = {};
        Video.forEach((video) => {
          const topic = video.Topic;
          if (!groupedVideo[topic]) {
            groupedVideo[topic] = [];
          }
          groupedVideo[topic].push(video);
        });
        return res.status(200).json({
          success: true,
          message: "Get DBMS Videos successfully",
          groupedVideo: groupedVideo,
        });
      } catch (err) {
        return res.status(200).json({
          success: false,
          message: "Error in GetDBMSVideos",
        });
      }
};

