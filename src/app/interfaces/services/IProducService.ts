import { IProduct } from "../IProduct";

export interface IProductService {
	listProducts(): Promise<IProduct[] | undefined>;
	createProducts(data: IProduct): Promise<boolean>;
	listProductsByCategory(categoryId: string): Promise<IProduct[] | undefined>;
}
