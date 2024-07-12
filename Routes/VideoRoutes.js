const express = require('express');
const router=express.Router();
const {AuthMiddleware}=require("../Middleware/AuthMiddleWare")
const {GetDSAVideos,GetOOPSVideos,GetCNVideos,GetOSVideos,GetDBMSVideos}=require("../Controllers/VideoController");
router.get('/GetDSAVideos',AuthMiddleware,GetDSAVideos);
router.get('/GetOOPSVideos',AuthMiddleware,GetOOPSVideos);
router.get('/GetCNVideos',AuthMiddleware,GetCNVideos);
router.get('/GetOSVideos',AuthMiddleware,GetOSVideos);
router.get('/GetDBMSVideos',AuthMiddleware,GetDBMSVideos);
module.exports = router;