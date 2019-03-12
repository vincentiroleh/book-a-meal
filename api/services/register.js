import bcrypt from 'bcrypt';
import Model from '../models';

const { User } = Model.User;

const UserService = {
  createUser(user) {
    bcrypt.genSalt(10, (error, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) throw err;
        user.password = hash;
        return User
          .create({
            email: user.email,
            password: user.password,
          });
      });
    });
  },
};

export default UserService;
