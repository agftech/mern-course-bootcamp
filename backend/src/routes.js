const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");

routes.get("/status", (req, res) => {
	res.send({ status: 200 });
});

routes.post("/user/register", UserController.createUser);
routes.get("/user/:userId", UserController.getUserById);

module.exports = routes;
