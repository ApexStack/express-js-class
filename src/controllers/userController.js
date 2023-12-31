import UserService from "../services/userService.js";

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  getUser = (req, res) => {
    const user = this.userService.getUser(req.params.id);
    res.json(user);
  };

  createUser = (req, res) => {
    const { username, email } = req.body;
    const newUser = this.userService.createUser(username, email);
    res.status(201).json(newUser);
  };

  updateUser = (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;
    const updatedUser = this.userService.updateUser(id, username, email);
    res.json(updatedUser);
  };

  deleteUser = (req, res) => {
    const { id } = req.params;
    this.userService.deleteUser(id);
    res.sendStatus(204);
  };
}

export default UserController;