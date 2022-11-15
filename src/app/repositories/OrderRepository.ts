import { IOrder } from "../interfaces/IOrder";
import { IOrderRepository } from "../interfaces/repositories/IOrderRepository";
import { Order } from "../models/Order";

class OrderRepository implements IOrderRepository {
	public async listOrders(): Promise<IOrder[] | undefined> {
		try {
			const order = await Order.find()
				.sort({ createdAt: 1 })
				.populate("products.product");

			if (!order) {
				return;
			}
			return order;
		} catch (error) {
			console.log("OrderRepository > Listorder", error);
		}
	}

	public async createOrders(data: IOrder): Promise<boolean> {
		try {
			console.log(data);
			const OrderCreated = await Order.create(data);
			if (!OrderCreated) {
				return false;
			}
			return true;
		} catch (error) {
			console.log("OrderRepository > CreateOrder", error);
			return false;
		}
	}

	public async deleteOrder(orderId: string): Promise<boolean> {
		try {
			const orderDeleted = await Order.deleteOne({ _id: orderId });
			if (!orderDeleted) {
				return false;
			}
			return true;
		} catch (error) {
			console.log("OrderRepository > DeleteOrder", error);
			return false;
		}
	}

	public async updateOrder(orderId: string, status: string): Promise<boolean> {
		try {
			const orderUpdated = await Order.findByIdAndUpdate(orderId, { status });
			if (!orderUpdated) {
				return false;
			}
			return true;
		} catch (error) {
			console.log("OrderRepository > UpdateOrder", error);
			return false;
		}
	}
}

export default OrderRepository;
