import { IUser } from "../IUser";

export interface IUserService {
	register(user: IUser): Promise<IUser | undefined>;
	// login(): Promise<IUser>;
	// verifyUserToken(): Promise<IUser>;
	checkIfUserByEmail(email: string): Promise<boolean>;
}
