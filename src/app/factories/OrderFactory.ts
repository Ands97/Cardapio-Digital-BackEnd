import { IOrderService } from "../interfaces/services/IOrderService";
import OrderRepository from "../repositories/OrderRepository";
import OrderService from "../services/OrderService";

class OrderFactory {
	getService(): IOrderService {
		return new OrderService(new OrderRepository());
	}
}

export default OrderFactory;
