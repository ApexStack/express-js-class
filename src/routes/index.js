import { Router } from "express";
import { userRoute } from "./userRoutes.js";

export const routes = Router();

routes.get("/", (req, res) => {
  res.json("Hello from Reactive Forge");
});

routes.use("/user", userRoute);
