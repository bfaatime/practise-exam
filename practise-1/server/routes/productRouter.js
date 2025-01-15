const express = require('express')

const {
    getProductById,
    addNewData,
    getAllProducts,
    deleteProduct,
} = require("../controllers/productControllers");

const router = express.Router();


router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.get("/", addNewData);

module.exports = router;