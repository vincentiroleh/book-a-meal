"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _meal = _interopRequireDefault(require("../controllers/meal.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import express
// import mealController
// Init express router
var router = _express.default.Router(); // Meal Endpoints
// get all meals


router.get('/', _meal.default.getAllMeals); // Get a single meal

router.get('/:id', _meal.default.getMeal); // post a meal

router.post('/', _meal.default.createMeal); // Update a meal

router.put('/:id', _meal.default.updateMeal); // Delete a single meal

router.delete('/:id', _meal.default.deleteMeal);
var _default = router;
exports.default = _default;
//# sourceMappingURL=meal.route.js.map