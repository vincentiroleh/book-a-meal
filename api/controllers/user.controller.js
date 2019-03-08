import model from '../models';

const { User } = model;

class UserController {
  static signUp(req, res) {
    const {
      name, username, email, password,
    } = req.body;
    return User
      .create({
        name,
        username,
        email,
        password,
      })
      .then(userData => res.status(201).send({
        success: true,
        message: 'Account successfully created',
        userData,
      }));
  }
}

export default UserController;
