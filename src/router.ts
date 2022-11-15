import path from "node:path";

import { Router } from "express";
import multer from "multer";

import CategoryController from "./app/controllers/CategoryController";
import ProductController from "./app/controllers/ProductController";
import OrdersController from "./app/controllers/OrdersController";

export const router = Router();

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, cb) {
			cb(null, path.resolve(__dirname, "..", "uploads"));
		},
		filename(req, file, cb) {
			cb(null, `${Date.now()}-${file.originalname}`);
		},
	}),
});

// List categories
router.get("/categories", CategoryController.listCategories);

// Create categories
router.post("/categories", CategoryController.createCategory);

// List products
router.get("/products", ProductController.listProducts);

// Create products
router.post(
	"/products",
	upload.single("image"),
	ProductController.createProduct
);

// Get products by categories
router.get(
	"/categories/:categoryId/products",
	ProductController.listProductsByCategory
);

// List orders
router.get("/orders", OrdersController.listOrders);

// Create orders
router.post("/orders", OrdersController.createOrder);

// Update status order by id
router.patch("/orders/:orderId", OrdersController.updateOrder);

// Delete orders
router.delete("/orders/:orderId", OrdersController.deleteOrder);
