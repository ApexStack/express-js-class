import { logger } from "../middleware/log.middleware.js";

class UserService {
  getUser(userId) {
    let msg = `It will return a User by ${userId}`;
    logger.info("It will return a User");
    return msg;
  }

  createUser(username, email) {
    let msg = `It will Create a New user`;
    logger.info("It will Create a New user");
    return msg;
  }

  updateUser(userId, username, email) {
    let msg = `It will Update a User `;
    logger.info("It will Update a User");
    return msg;
  }

  deleteUser(userId) {
    let msg = `It will Delete a User by ${userId}`;
    logger.info("It will Delete a User");
    return msg;
  }
}

export default UserService;
