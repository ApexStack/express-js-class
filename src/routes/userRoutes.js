// src/routes/userRoutes.js
import express from "express";
import UserController from "../controllers/userController.js";

export const userRoute = express.Router();
const userController = new UserController();

userRoute.get("/:id", userController.getUser);
userRoute.get("/", userController.createUser);
userRoute.put("/:id", userController.updateUser);
userRoute.delete("/:id", userController.deleteUser);
