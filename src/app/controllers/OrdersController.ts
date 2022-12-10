import { Request, Response } from "express";
import { io } from "../..";
import OrderFactory from "../factories/OrderFactory";

class OrdersController {
	public async listOrders(req: Request, res: Response): Promise<void> {
		try {
			const service = new OrderFactory().getService();

			const orders = await service.listOrders();

			if (!orders) {
				res.status(404);
			}

			res.json(orders);
		} catch (error) {
			console.log("OrdersController > listOrders", error);
			res.status(500).json({
				error: "Internal server error",
			});
		}
	}

	public async createOrder(req: Request, res: Response): Promise<void> {
		try {
			const data = req.body;
			const service = new OrderFactory().getService();

			const order = await service.createOrders(data);
			io.emit("newOrder", order);
			res.status(201).json(order);
		} catch (error) {
			console.log("OrdersController > CreateOrders", error);
			res.status(500).json({
				error: "Internal server error",
			});
		}
	}

	public async updateOrder(req: Request, res: Response): Promise<void> {
		try {
			const { orderId } = req.params;
			const { status } = req.body;
			const service = new OrderFactory().getService();

			const orderUpdated = await service.updateOrder(orderId, status);

			res.status(201).json(orderUpdated);
		} catch (error) {
			console.log("OrdersController > CreateOrders", error);
			res.status(500).json({
				error: "Internal server error",
			});
		}
	}

	public async deleteOrder(req: Request, res: Response): Promise<void> {
		try {
			const { orderId } = req.params;
			const service = new OrderFactory().getService();

			const orderDeleted = await service.deleteOrder(orderId);

			res.status(201).json(orderDeleted);
		} catch (error) {
			console.log("OrdersController > DeleteOrder", error);
			res.status(500).json({
				error: "Internal server error",
			});
		}
	}
}
export default new OrdersController();
