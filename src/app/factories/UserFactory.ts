import { IUserService } from "../interfaces/services/IUserService";
import UserRepository from "../repositories/UserRepository";
import UserService from "../services/UserService";

class UserFactory {
	getService(): IUserService {
		return new UserService(new UserRepository());
	}
}

export default UserFactory;
