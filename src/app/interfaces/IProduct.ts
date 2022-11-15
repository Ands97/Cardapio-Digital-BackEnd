import mongoose from "mongoose";

export interface IProduct {
	name: string;
	description: string;
	imagePath?: string;
	price: number;
	ingredients: IIngredients[];
	category: mongoose.Types.ObjectId;
}

interface IIngredients {
	name: string;
	icon: string;
}
