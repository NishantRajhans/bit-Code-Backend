const express = require('express');
const router=express.Router();
const {AuthMiddleware}=require("../Middleware/AuthMiddleWare")
const {AddToDoneList,RemoveFromDoneList,AddToReviewList,RemoveFromReviewList,GetDoneList}=require("../Controllers/WishListController");
router.post('/AddToDoneList',AuthMiddleware,AddToDoneList);
router.post('/RemoveFromDoneList',AuthMiddleware,RemoveFromDoneList);
router.post('/AddToReviewList',AuthMiddleware,AddToReviewList);
router.post('/RemoveFromReviewList',AuthMiddleware,RemoveFromReviewList);
router.post('/GetDoneList',AuthMiddleware,GetDoneList);
module.exports = router;