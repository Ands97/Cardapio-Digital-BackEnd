import { ICategory } from "../ICategory";

export interface ICategoryService {
	listCategory(): Promise<ICategory[] | undefined>;
	createCategory(data: ICategory): Promise<boolean>;
}
