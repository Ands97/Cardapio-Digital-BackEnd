import { IOrder } from "../IOrder";

export interface IOrderRepository {
	listOrders(): Promise<IOrder[] | undefined>;
	createOrders(data: IOrder): Promise<boolean>;
	updateOrder(orderId: string, status: string): Promise<boolean>;
	deleteOrder(orderId: string): Promise<boolean>;
}
