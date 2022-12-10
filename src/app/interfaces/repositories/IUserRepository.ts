import { IUser } from "../IUser";

export interface IUserRepository {
	checkIfUserByEmail(email: string): Promise<boolean>;
	createUser(user: IUser): Promise<IUser | undefined>;
}
