const express = require('express');
const router=express.Router();
const {AuthMiddleware}=require("../Middleware/AuthMiddleWare")
const {GetNeetCodeSheet,GetStriverSheet,GetLoveBubberSheet,GetCSES_ProblemSet,GetSeniorSheet}=require("../Controllers/PracticeController");
router.get('/GetNeetCodeSheet',AuthMiddleware,GetNeetCodeSheet);
router.get('/GetStriverSheet',AuthMiddleware,GetStriverSheet);
router.get('/GetLoveBubberSheet',AuthMiddleware,GetLoveBubberSheet);
router.get('/GetCSES_ProblemSet',AuthMiddleware,GetCSES_ProblemSet);
router.get('/GetSeniorSheet',AuthMiddleware,GetSeniorSheet);
module.exports = router;