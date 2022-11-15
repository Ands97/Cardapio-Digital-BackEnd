import { ICategory } from "../ICategory";

export interface ICategoryRepository {
	listCategories(): Promise<ICategory[] | undefined>;
	createCategory(data: ICategory): Promise<boolean>;
}
