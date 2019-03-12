import express from 'express';
import verifyToken from '../middleware/verifyToken';

import loginController from '../controllers/login';
import MealController from '../controllers/meal';
import MenuController from '../controllers/menu';
import OrderController from '../controllers/order';
import RegisterController from '../controllers/register';


const router = express.Router();

// Register route
router.post('/api/signup', RegisterController.createUser);

// Login route
router.post('/api/login', loginController.getLogin);

// Meal routes
router.get('/api/v1/meals', MealController.getAllMeal);
router.get('/api/v1/meals/:id', MealController.getMealById);
router.post('/api/v1/meals', verifyToken, MealController.createMeal);
router.put('/api/v1/meals/:id', verifyToken, MealController.updateMeal);
router.delete('/api/v1/meals/:id', verifyToken, MealController.deleteMeal);

// Menu routes
router.get('/api/v1/menu', MenuController.getAllMenu);
router.get('/api/v1/menu/:id', MenuController.getMenuById);
router.post('/api/v1/menu', verifyToken, MenuController.createMenu);
router.put('/api/v1/menu/:id', verifyToken, MenuController.updateMenu);
router.delete('/api/v1/menu/:id', verifyToken, MenuController.deleteMenu);

// Order routes
router.get('/api/v1/orders', OrderController.getAllOrder);
router.get('/api/v1/orders/:id', OrderController.getOrderById);
router.post('/api/v1/orders', OrderController.createOrder);
router.put('/api/v1/orders/:id', OrderController.updateOrder);
router.delete('/api/v1/orders/:id', OrderController.deleteOrder);


export default router;