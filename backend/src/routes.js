const express = require("express");
const routes = express.Router();
const multer = require("multer");

const UserController = require("./controllers/UserController");
const EventController = require("./controllers/EventController");
const DashboardController = require("./controllers/DashboardController");
const LoginController = require("./controllers/LoginController");
const uploadConfig = require("./config/upload");

const upload = multer(uploadConfig);

routes.get("/status", (req, res) => {
	res.send({ status: 200 });
});

//Login
routes.post("/login", LoginController.store);

//Dashboard
routes.get("/dashboard", DashboardController.getAllEvents);
routes.get("/dashboard/:sport", DashboardController.getAllEventsBySport);
routes.get("/event/:eventId", DashboardController.getEventById);

//Events
routes.post("/event", upload.single("thumbnail"), EventController.createEvent);
routes.delete("/event/:eventId", EventController.delete);

//User
routes.post("/user/register", UserController.createUser);
routes.get("/user/:userId", UserController.getUserById);

module.exports = routes;
