import mongoose from "mongoose";

export interface IOrder {
	table: string;
	status?: string;
	createdAt?: Date;
	products: IProducts[];
}

interface IProducts {
	product: mongoose.Types.ObjectId;
	quantity: number;
}
