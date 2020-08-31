const express = require("express");
const routes = express.Router();
const multer = require("multer");

const UserController = require("./controllers/UserController");
const EventController = require("./controllers/EventController");
const uploadConfig = require("./config/upload");

const upload = multer(uploadConfig);

routes.get("/status", (req, res) => {
	res.send({ status: 200 });
});

//Event
routes.post("/event", upload.single("thumbnail"), EventController.createEvent);
routes.get("/event/:eventId", EventController.getEventById);
routes.get("/events", EventController.getAllEvents);

//User
routes.post("/user/register", UserController.createUser);
routes.get("/user/:userId", UserController.getUserById);

module.exports = routes;
