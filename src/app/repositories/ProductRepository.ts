import { IProduct } from "../interfaces/IProduct";
import { IProductRepository } from "../interfaces/repositories/IProductRepository";
import { Product } from "../models/Product";

class ProductRepository implements IProductRepository {
	public async listProducts(): Promise<IProduct[] | undefined> {
		try {
			const products = await Product.find();

			if (!products) {
				return;
			}

			return products;
		} catch (error) {
			console.log("ProductRepository > ListProducts", error);
		}
	}

	public async createProducts(data: IProduct): Promise<boolean> {
		try {
			const productCreated = await Product.create(data);
			if (!productCreated) {
				return false;
			}
			return true;
		} catch (error) {
			console.log("ProductRepository > CreateProducts", error);
			return false;
		}
	}

	public async listProductsByCategory(
		categoryId: string
	): Promise<IProduct[] | undefined> {
		try {
			const products = await Product.find()
				.where("category")
				.equals(categoryId);

			if (!products) {
				return;
			}

			return products;
		} catch (error) {
			console.log("CategoryRepository > ListProductsByCategory", error);
		}
	}
}

export default ProductRepository;
