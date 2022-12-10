import { IUser } from "../interfaces/IUser";
import { IUserRepository } from "../interfaces/repositories/IUserRepository";
import { User } from "../models/User";

class UserRepository implements IUserRepository {
	public async checkIfUserByEmail(email: string): Promise<boolean> {
		try {
			const userExist = await User.findOne({ email });

			if (!userExist) {
				return false;
			}

			return true;
		} catch (error) {
			console.log("UserRepository > CheckIfUserByEmail", error);
			return false;
		}
	}

	public async createUser(user: IUser): Promise<IUser | undefined> {
		try {
			const newUser = await User.create(user);

			if (!newUser) {
				return;
			}

			return newUser as IUser;
		} catch (error) {
			console.log("UserRepository > CreateUser", error);
		}
	}
}

export default UserRepository;
