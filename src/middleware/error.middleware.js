import { logger } from "./log.middleware.js";

export const errorMiddleWare = ( req, res , next) => {
  res
    .status(500)
    .json({ error: "Internal Server Error , Check the endpoints" });
    logger.error(`Internal Server Error: ${req.method} ${req.url}`);
};
