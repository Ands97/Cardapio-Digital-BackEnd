import { IProductService } from "../interfaces/services/IProducService";
import ProductRepository from "../repositories/ProductRepository";
import ProductService from "../services/ProductService";

class ProductFactory {
	getService(): IProductService {
		return new ProductService(new ProductRepository());
	}
}

export default ProductFactory;
