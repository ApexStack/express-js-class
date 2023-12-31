import { Router } from "express";
import { userRoute } from "./userRoutes.js";

export const routes = Router();

routes.use("/", userRoute);
