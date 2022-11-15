import { IProduct } from "../interfaces/IProduct";
import { IProductRepository } from "../interfaces/repositories/IProductRepository";
import { IProductService } from "../interfaces/services/IProducService";

class ProductService implements IProductService {
	private readonly _repo: IProductRepository;

	constructor(repo: IProductRepository) {
		this._repo = repo;
	}

	public async listProducts(): Promise<IProduct[] | undefined> {
		try {
			const products = await this._repo.listProducts();
			if (!products) {
				return;
			}
			return products;
		} catch (error) {
			console.log("ProductService > ListProducts", error);
		}
	}

	public async createProducts(data: IProduct): Promise<boolean> {
		try {
			const productCreated = await this._repo.createProducts(data);

			return productCreated;
		} catch (error) {
			console.log("ProductService > CreateProducts", error);
			return false;
		}
	}

	public async listProductsByCategory(
		categoryId: string
	): Promise<IProduct[] | undefined> {
		try {
			const products = await this._repo.listProductsByCategory(categoryId);
			if (!products) {
				return;
			}
			return products;
		} catch (error) {
			console.log("ProductService > ListProducts", error);
		}
	}
}

export default ProductService;
