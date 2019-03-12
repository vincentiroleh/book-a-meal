import RegisterService from '../services/register';

const RegisterController = {
  createUser(req, res) {
  	const newUser = req.body;
  	if (!req.body.email || !req.body.password) {
  		res.status(400).send({
  			msg: 'Please enter username and password.'
  		});
  	}
    RegisterService.createUser(newUser);
    return res.send({
    	success: true,
    	msg: 'registered successfully'
    });
  }
};

export default RegisterController;