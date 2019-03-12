import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import loginService from '../services/login';

const LoginController = {
  getLogin(req, res) {
    const user = req.body;
    loginService.searchUser(user).then((users) => {
      if (users === null || users === 'undefined') {
        return res.json({
          status: 'false', 
          data: 'Invalid Email',
        });
      }

      bcrypt.compare(user.password, users.password, (err, isMatch) => {
        if (!isMatch) {
          return res.json({
            status: 'false',
            data: 'Invalid Password',
          });
        }
        jwt.sign({
          users,
        }, 'secretkey', (err, token) => {
          res.cookie('Authorization', `Bearer ${token}`);
          return res.json({
            status: 'success',
            data: users,
            token,
          });
        });
      });
    });
  },
};

export default LoginController;