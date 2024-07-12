const express = require('express');
const router=express.Router();
const {AuthMiddleware}=require("../Middleware/AuthMiddleWare")
const {AddToDoneList,RemoveFromDoneList,AddToReviewList,RemoveFromReviewList}=require("../Controllers/WishListController");
router.get('/AddToDoneList',AuthMiddleware,AddToDoneList);
router.get('/RemoveFromDoneList',AuthMiddleware,RemoveFromDoneList);
router.get('/AddToReviewList',AuthMiddleware,AddToReviewList);
router.get('/RemoveFromReviewList',AuthMiddleware,RemoveFromReviewList);
module.exports = router;