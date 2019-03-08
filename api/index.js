/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import mealRouter from './routes/meal.route';
import menuRouter from './routes/menu.route';
import orderRouter from './routes/order.route';
import routes from './routes/index';

// setup express
const app = express();

// setup bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => res.send('Welcome to Meal Booking API'));

// handle
routes(app);
app.use('/api/v1/meals', mealRouter);
app.use('/api/v1/menu', menuRouter);
app.use('/api/v1/orders', orderRouter);

// Port and server configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
