import Model from '../models';

const { Meal } = Model.Meal;

const MealService = {
  getAllMeal() {
    return Meal.findAll({
      attributes: ['id', 'name', 'description', 'quantity', 'price'],
    });
  },

  getMealById(id) {
    return Meal.findByPk(id, {
      attributes: ['id', 'name', 'description', 'quantity', 'price'],
    });
  },

  createMeal(meal) {
    Meal.create({
      name: meal.name,
      description: meal.description,
      quantity: meal.quantity,
      price: meal.price,
    });
    return meal;
  },

  updateMeal(id, meal) {
    Meal.update(meal, {
      where: { id },
    });
    return meal;
  },

  deleteMeal(id) {
    Meal.destroy({
      where: {
        id,
      },
    });
    return [];
  },
};

export default MealService;
