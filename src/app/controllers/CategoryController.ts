import { Request, Response } from "express";
import CategoryFactory from "../factories/CategoryFactory";
import { ICategory } from "../interfaces/ICategory";

class CategoryController {
	public async listCategories(req: Request, res: Response): Promise<void> {
		try {
			const service = new CategoryFactory().getService();

			const categories = await service.listCategory();

			if (!categories) {
				res.status(404);
			}

			res.json(categories);
		} catch (error) {
			console.log(error);
		}
	}

	public async createCategory(req: Request, res: Response): Promise<void> {
		try {
			const { name, icon }: ICategory = req.body;
			const service = new CategoryFactory().getService();

			const categories = await service.createCategory({ name, icon });

			res.status(201).json(categories);
		} catch (error) {
			console.log("CategoryController > createCategory", error);
			res.status(500).json({
				error: "Internal server error",
			});
		}
	}
}
export default new CategoryController();
