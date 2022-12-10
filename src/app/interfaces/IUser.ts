export interface IUser {
	name: string;
	email: string;
	password: string;
	level: "SUPER" | "ADM" | "OPERATIONAL";
	token?: string;
}
