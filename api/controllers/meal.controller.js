/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable class-methods-use-this */
import Meals from '../utils/mealDb';
import mealModel from '../models/meal.model';

class MealController {
  // Get all the meal options
  getAllMeals(req, res) {
    return res.status(200).send({
      status: 'true',
      message: 'meals retrieved successfully',
      data: Meals,
    });
  }

  // Get a single meal option
  getMeal(req, res) {
    const id = parseInt(req.params.id, 10);

    Meals.map((meal) => {
      const foundMeal = meal;
      if (meal.id === id) {
        return res.status(200).send({
          status: 'true',
          message: 'meal retrieved successfully',
          foundMeal,
        });
      }
    });
    return res.status(404).send({
      status: 'false',
      message: 'Meal does not exist',
    });
  }

  // Add a meal option
  createMeal(req, res) {
    if (!req.body.name) {
      return res.status(400).send({
        status: 'false',
        message: 'name of food is required',
      });
    }
    if (!req.body.size) {
      return res.status(400).send({
        status: 'false',
        message: 'size of food is required',
      });
    }
    if (!req.body.price) {
      return res.status(400).send({
        success: 'false',
        message: 'price of food is required',
      });
    }
    const newMeal = {
      id: Meals.length + 1,
      name: req.body.name,
      size: req.body.size,
      price: req.body.price,
    }
    Meals.push(newMeal);
    return res.status(201).send({
      status: 'true',
      message: 'Meals added successfully',
      newMeal,
    });
  }

  // Update the information of a mealoption
  updateMeal(req, res) {
    const id = parseInt(req.params.id, 10);

    let mealFound;
    let itemIndex;

    Meals.map((meal, index) => {
      if (meal.id === id) {
        mealFound = meal;
        itemIndex = index;
      }
    });
    // handing errors
    if (!mealFound) {
      return res.status(404).send({
        status: 'false',
        message: 'Meal not found',
      });
    }
    if (!req.body.name) {
      return res.status(400).send({
        status: 'false',
        message: 'name is required',
      });
    }
    if (!req.body.size) {
      return res.status(400).send({
        status: 'false',
        message: 'size is required',
      });
    }
    if (!req.body.price) {
      return res.status(400).send({
        status: 'false',
        message: 'price is required',
      });
    }

    const updatedMeal = {
      id: mealFound.id,
      name: req.body.name || mealFound.name,
      size: req.body.size || mealFound.size,
      price: req.body.price || mealFound.price,
    };

    Meals.splice(itemIndex, 1, updatedMeal);

    return res.status(201).send({
      status: 'true',
      message: 'Meal updated successfully',
      updatedMeal,
    });
  }

  // Remove a meal option
  deleteMeal(req, res) {
    const id = parseInt(req.params.id, 10);

    let foundMeal;
    let itemIndex;

    Meals.map((meal, index) => {
      if (meal.id === id) {
        foundMeal = meal;
        itemIndex = index;
      }
    });

    if (!foundMeal) {
      return res.status(404).send({
        status: 'false',
        message: 'Meal not found',
      });
    }
    Meals.splice(itemIndex, 1);

    return res.status(200).send({
      status: 'true',
      message: 'Meal deleted successfully',
    });
  }
}

const mealController = new MealController();

export default mealController;