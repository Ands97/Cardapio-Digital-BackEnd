import { IOrder } from "../IOrder";

export interface IOrderService {
	listOrders(): Promise<IOrder[] | undefined>;
	createOrders(data: IOrder): Promise<IOrder | undefined>;
	updateOrder(orderId: string, data: string): Promise<boolean>;
	deleteOrder(orderId: string): Promise<boolean>;
}
