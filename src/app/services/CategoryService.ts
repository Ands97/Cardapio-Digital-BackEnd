import { ICategory } from "../interfaces/ICategory";
import { ICategoryRepository } from "../interfaces/repositories/ICategoryRepository";
import { ICategoryService } from "../interfaces/services/ICategoryService";

class CategoryService implements ICategoryService {
	private readonly _repo: ICategoryRepository;
	constructor(repo: ICategoryRepository) {
		this._repo = repo;
	}

	public async listCategory(): Promise<ICategory[] | undefined> {
		try {
			const categories = await this._repo.listCategories();
			if (!categories) {
				return;
			}
			return categories;
		} catch (error) {
			console.log("CategoryService > ListCategory", error);
		}
	}

	public async createCategory(data: ICategory): Promise<boolean> {
		try {
			const categoryCreated = await this._repo.createCategory(data);

			if (!categoryCreated) {
				return false;
			}
			return true;
		} catch (error) {
			console.log("CategoryService > CreateCategory", error);
			return false;
		}
	}
}

export default CategoryService;
