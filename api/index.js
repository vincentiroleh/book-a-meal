/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';

import Routers from './routes';
import config from './config/config';

// setup express
const app = express();

// setup bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Entry router
app.get('/', (req, res) => res.send('Welcome to Meal Booking API'));

// ENDPOINT Routers
app.use(Routers);

// Port and server configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
