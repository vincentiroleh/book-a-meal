import UserController from '../controllers/user.controller';


export default (app) => {
  app.post('/api/v1/auth/signup', UserController.signUp);
};
