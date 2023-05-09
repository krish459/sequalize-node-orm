const reviewController = require('../controllers/reviewController')

const router = require("express").Router();

router.post("/addreview", reviewController.addReview);

router.get("/allreviews", reviewController.getAllReviews);

module.exports = router
