// imported express
import express from 'express';

// Import mealsController
import menuController from '../controllers/menu.controller';

// Initialized express router
const router = express.Router();

// Menu ENDPOINTS

router.post('/', menuController.createMenu);

router.get('/', menuController.getMenu);

export default router;
