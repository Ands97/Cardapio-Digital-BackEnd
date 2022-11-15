import { Request, Response } from "express";
import ProductFactory from "../factories/ProductFactory";

class ProductController {
	public async listProducts(req: Request, res: Response): Promise<void> {
		try {
			const service = new ProductFactory().getService();

			const products = await service.listProducts();

			res.json(products);
		} catch (error) {
			console.log("ProductController > listProduct", error);
			res.status(500).json({
				error: "Internal server error",
			});
		}
	}

	public async createProduct(req: Request, res: Response): Promise<void> {
		try {
			const imagePath = req.file?.filename;
			const data = req.body;
			const service = new ProductFactory().getService();

			const products = await service.createProducts({
				...data,
				ingredients: data.ingredients ? JSON.parse(data.ingredients) : [],
				price: Number(data.price),
				imagePath: imagePath,
			});

			res.status(201).json(products);
		} catch (error) {
			console.log("ProductController > createProduct", error);
			res.status(500).json({
				error: "Internal server error",
			});
		}
	}

	public async listProductsByCategory(
		req: Request,
		res: Response
	): Promise<void> {
		try {
			const { categoryId } = req.params;

			const service = new ProductFactory().getService();

			const products = await service.listProductsByCategory(categoryId);

			if (!products) {
				res.status(404);
			}

			res.json(products);
		} catch (error) {
			console.log("ProductController > listProductsByCategory", error);
			res.status(500).json({
				error: "Internal server error",
			});
		}
	}
}

export default new ProductController();
