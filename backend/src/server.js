const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const PORT = process.env.port || 8000;

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

app.get("/", (req, res) => {
	res.send("Hello from express!");
});

app.get("/register", (req, res) => {
	res.send("Welcome to Register \n");
});

try {
	mongoose.connect(process.env.MONGO_DB_SECRET, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log("MongoDb connected successfully!");
} catch (error) {
	console.log(error);
}

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
