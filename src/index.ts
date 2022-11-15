import express from "express";
import "dotenv/config";
import path from "node:path";
import config from "./config";
import mongoose from "mongoose";
import { router } from "./router";

mongoose
	.connect(config.db.url)
	.then(() => {
		const app = express();

		app.use(
			"/uploads",
			express.static(path.resolve(__dirname, "..", "uploads"))
		);
		app.use(express.json());
		app.use(router);

		app.listen(config.server.port, () => {
			console.log(`Server is running on port: ${config.server.port}`);
		});
	})
	.catch(() => console.log("Connect Error Database"));
