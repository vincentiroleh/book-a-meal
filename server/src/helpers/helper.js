import jwt from 'jsonwebtoken';

const jwtSigner = ({ id }) => jwt.sign({ id }, process.env.SECRET, { expiresIn: '7d' });

export default jwtSigner;
