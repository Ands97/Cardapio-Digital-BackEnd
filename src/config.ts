import "dotenv/config";

export default {
	server: {
		port: process.env.PORT || 3001,
	},
	db: {
		url: process.env.MONGO_URL as string,
	},
};
