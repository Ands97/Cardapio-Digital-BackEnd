import { IProduct } from "../IProduct";

export interface IProductRepository {
	listProducts(): Promise<IProduct[] | undefined>;
	createProducts(data: IProduct): Promise<boolean>;
	listProductsByCategory(categoryId: string): Promise<IProduct[] | undefined>;
}
