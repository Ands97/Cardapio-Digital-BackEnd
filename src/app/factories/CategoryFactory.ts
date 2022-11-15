import { ICategoryService } from "../interfaces/services/ICategoryService";
import CategoryRepository from "../repositories/CategoryRepository";
import CategoryService from "../services/CategoryService";

class CategoryFactory {
	getService(): ICategoryService {
		return new CategoryService(new CategoryRepository());
	}
}

export default CategoryFactory;
