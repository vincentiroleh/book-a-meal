/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import mealRouter from './routes/meal.route';
import menuRouter from './routes/menu.route';

// setup express
const app = express();

// setup bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => res.send('The API is working'));

// handle
app.use('/api/v1/meals', mealRouter);
app.use('/api/v1/menu', menuRouter);


// Port and server configuration
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App up and running on port ${PORT}`);
});
