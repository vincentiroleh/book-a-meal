// import express
import express from 'express';

// import mealController
import mealController from '../controllers/meal.controller';

// Init express router
const router = express.Router();

// Meal Endpoints

// get all meals
router.get('/', mealController.getAllMeals);

// Get a single meal
router.get('/:id', mealController.getMeal);

// post a meal
router.post('/', mealController.createMeal);

// Update a meal
router.put('/:id', mealController.updateMeal);

// Delete a single meal
router.delete('/:id', mealController.deleteMeal);

export default router;
