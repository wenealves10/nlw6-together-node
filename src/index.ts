import dotenv from "dotenv";
import { app } from "./app";

dotenv.config();

const address = {
	port: process.env.PORT || 3000,
};

app.listen(address.port, () => {
	console.log(`Server is running in PORT ${address.port}`);
});
