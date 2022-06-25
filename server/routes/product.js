const express = require("express");
const productRouter = express.Router();
const auth = require("../middlewares/auth");

// Get all products

// api/products?category=Essentials = req.query
// api/products:category=Essentials = req.params

productRouter.get('/api/products', auth, async(req, res) => {
    try{

        const products = await Product.find({category: req.query.category});
        res.json(products);
    }catch(e){
        res.status(500).json({error: e.message});
    }
});productRouterports = adminRouter;
