import { IOrder } from "../IOrder";

export interface IOrderRepository {
	listOrders(): Promise<IOrder[] | undefined>;
	createOrders(data: IOrder): Promise<IOrder | undefined>;
	updateOrder(orderId: string, status: string): Promise<boolean>;
	deleteOrder(orderId: string): Promise<boolean>;
}
