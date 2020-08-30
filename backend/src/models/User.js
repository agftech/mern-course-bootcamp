const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	password: String,
	email: String,
});

module.exports = mongoose.model("MERN", UserSchema, "users");
