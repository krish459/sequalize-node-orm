const db = require('../models')

const Review = db.reviews

// 1. Add review
const addReview = async(req,res)=>{
    let data = {
        rating: req.body.rating,
        description: req.body.description
    }
    const review = await Review.create(data)
    res.status(200).send(review)

}

// 2, Get all reviews
const getAllReviews = async(req,res)=>{
    const reviews = await Review.findAll()
    res.status(200).send(reviews)
}

module.exports={
    addReview,
    getAllReviews
}