import { ICategory } from "../interfaces/ICategory";
import { ICategoryRepository } from "../interfaces/repositories/ICategoryRepository";
import { Category } from "../models/Category";

class CategoryRepository implements ICategoryRepository {
	public async listCategories(): Promise<ICategory[] | undefined> {
		try {
			const categories = await Category.find();
			if (!categories) {
				return;
			}
			return categories;
		} catch (error) {
			console.log("CategoryRepository > ListCategories", error);
		}
	}

	public async createCategory(data: ICategory): Promise<boolean> {
		try {
			const { name, icon } = data;
			const categoryCreated = await Category.create({ name, icon });
			if (!categoryCreated) {
				return false;
			}
			return true;
		} catch (error) {
			console.log("CategoryRepository > CreateCategory", error);
			return false;
		}
	}
}

export default CategoryRepository;
