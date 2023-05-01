const productControllers = require("../controllers/productController");

const router = require("express").Router();

router.post("/addproduct", productControllers.addproduct);

router.get("/allproducts", productControllers.getAllProducts);

router.get("/allproducts/:id", productControllers.getOneProduct);

router.put("/updateproduct/:id", productControllers.updateProduct);

router.delete("/deleteproduct/:id", productControllers.deleteProduct);

router.get("/published", productControllers.getPublishedProduct);

module.exports = router