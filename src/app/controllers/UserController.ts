/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import UserFactory from "../factories/UserFactory";
import { IUser } from "../interfaces/IUser";

class UserController {
	public async register(req: Request, res: Response) {
		try {
			const { name, email, password, level } = req.body;

			const service = new UserFactory().getService();
			const hasUser = await service.checkIfUserByEmail(email);

			if (hasUser) {
				res.json({ message: "User already exist" });
				return;
			}
			const user: IUser = {
				name,
				email,
				password,
				level,
			};
			const registered = await service.register(user);

			if (!registered) {
				throw new Error("Unknown Error");
			}

			res.json({ token: registered.token, name: registered.name });
		} catch (error: any) {
			console.log({ message: error.message });
		}
	}
}
export default new UserController();
