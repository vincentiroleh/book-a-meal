// imported express
import express from 'express';

// Import mealsController
import orderController from '../controllers/order.controller';

// Initialized express router
const router = express.Router();

// Menu ENDPOINTS

router.post('/', orderController.createOrder);

router.put('/:id', orderController.updateOrder);

router.get('/', orderController.getAllOrders);

export default router;
