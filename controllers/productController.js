const db = require("../models");

// Create main Model
const Product = db.products
const Review = db.reviews

// main work

// 1. Create Product
const addproduct = async (req,res)=>{
    let info = {
        title: req.body.title,
        price: req.body.price,
        decription: req.body.description,
        published: req.body.published ? req.body.published : false
    }
    const product = await Product.create(info)
    res.status(200).send(product)

}

// 2. 