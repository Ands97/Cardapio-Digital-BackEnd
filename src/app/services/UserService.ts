import JWT from "jsonwebtoken";
import config from "../../config";
import { IUser } from "../interfaces/IUser";
import { IUserRepository } from "../interfaces/repositories/IUserRepository";
import { IUserService } from "../interfaces/services/IUserService";
import bcrypt from "bcrypt";

class UserService implements IUserService {
	private readonly _repo: IUserRepository;
	constructor(repo: IUserRepository) {
		this._repo = repo;
	}

	public async checkIfUserByEmail(email: string): Promise<boolean> {
		try {
			const user = await this._repo.checkIfUserByEmail(email);

			if (!user) {
				return false;
			}

			return true;
		} catch (error) {
			console.log("UserService > CheckIfUserByEmail", error);
			return false;
		}
	}

	public async register(user: IUser): Promise<IUser | undefined> {
		try {
			const token = JWT.sign(
				{ name: user.name, email: user.email },
				config.jwt.secret
			);
			const encryptedPassword = await bcrypt.hash(user.password, 10);

			const userToSave = {
				...user,
				token,
				password: encryptedPassword,
			};

			const newUser = await this._repo.createUser(userToSave);

			if (!newUser) {
				throw new Error("Unknown error");
			}

			return newUser;
		} catch (error) {
			console.log("UserService > Register", error);
		}
	}
}

export default UserService;
