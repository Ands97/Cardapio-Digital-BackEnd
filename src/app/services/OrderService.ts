import { IOrder } from "../interfaces/IOrder";
import { IOrderRepository } from "../interfaces/repositories/IOrderRepository";
import { IOrderService } from "../interfaces/services/IOrderService";

class OrderService implements IOrderService {
	private readonly _repo: IOrderRepository;
	constructor(repo: IOrderRepository) {
		this._repo = repo;
	}

	public async listOrders(): Promise<IOrder[] | undefined> {
		try {
			const orders = await this._repo.listOrders();
			if (!orders) {
				return;
			}
			return orders;
		} catch (error) {
			console.log("OrderService > ListOrder", error);
		}
	}

	public async createOrders(data: IOrder): Promise<IOrder | undefined> {
		try {
			const orderCreated = await this._repo.createOrders(data);

			if (!orderCreated) {
				return;
			}
			return orderCreated;
		} catch (error) {
			console.log("OrderService > CreateOrder", error);
		}
	}

	public async updateOrder(orderId: string, status: string): Promise<boolean> {
		try {
			const orderUpdated = await this._repo.updateOrder(orderId, status);

			if (!orderUpdated) {
				return false;
			}
			return true;
		} catch (error) {
			console.log("OrderService > CreateOrder", error);
			return false;
		}
	}

	public async deleteOrder(orderId: string): Promise<boolean> {
		try {
			const orderDeleted = await this._repo.deleteOrder(orderId);

			if (!orderDeleted) {
				return false;
			}
			return true;
		} catch (error) {
			console.log("OrderService > CreateOrder", error);
			return false;
		}
	}
}

export default OrderService;
