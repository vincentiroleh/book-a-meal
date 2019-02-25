"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mealDb = _interopRequireDefault(require("../utils/mealDb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MealController =
/*#__PURE__*/
function () {
  function MealController() {
    _classCallCheck(this, MealController);
  }

  _createClass(MealController, [{
    key: "getAllMeals",
    // Get all the meal options
    value: function getAllMeals(req, res) {
      return res.status(200).send({
        status: 'true',
        message: 'meals retrieved successfully',
        data: _mealDb.default
      });
    } // Get a single meal option

  }, {
    key: "getMeal",
    value: function getMeal(req, res) {
      var id = parseInt(req.params.id, 10);

      _mealDb.default.map(function (meal) {
        var foundMeal = meal;

        if (meal.id === id) {
          return res.status(200).send({
            status: 'true',
            message: 'meal retrieved successfully',
            foundMeal: foundMeal
          });
        }
      });

      return res.status(404).send({
        status: 'false',
        message: 'Meal does not exist'
      });
    } // Add a meal option

  }, {
    key: "createMeal",
    value: function createMeal(req, res) {
      if (!req.body.name) {
        return res.status(400).send({
          status: 'false',
          message: 'name of food is required'
        });
      }

      if (!req.body.size) {
        return res.status(400).send({
          status: 'false',
          message: 'size of food is required'
        });
      }

      if (!req.body.price) {
        return res.status(400).send({
          success: 'false',
          message: 'price of food is required'
        });
      }

      var newMeal = {
        id: _mealDb.default.length + 1,
        name: req.body.name,
        size: req.body.size,
        price: req.body.price
      };

      _mealDb.default.push(newMeal);

      return res.status(201).send({
        status: 'true',
        message: 'Meals added successfully',
        newMeal: newMeal
      });
    } // Update the information of a meal option

  }, {
    key: "updateMeal",
    value: function updateMeal(req, res) {
      var id = parseInt(req.params.id, 10);
      var mealFound;
      var itemIndex;

      _mealDb.default.map(function (meal, index) {
        if (meal.id === id) {
          mealFound = meal;
          itemIndex = index;
        }
      }); // handing errors


      if (!mealFound) {
        return res.status(404).send({
          status: 'false',
          message: 'Meal not found'
        });
      }

      if (!req.body.name) {
        return res.status(400).send({
          status: 'false',
          message: 'name is required'
        });
      }

      if (!req.body.size) {
        return res.status(400).send({
          status: 'false',
          message: 'size is required'
        });
      }

      if (!req.body.price) {
        return res.status(400).send({
          status: 'false',
          message: 'price is required'
        });
      }

      var updatedMeal = {
        id: mealFound.id,
        name: req.body.name || mealFound.name,
        size: req.body.size || mealFound.size,
        price: req.body.price || mealFound.price
      };

      _mealDb.default.splice(itemIndex, 1, updatedMeal);

      return res.status(201).send({
        status: 'true',
        message: 'Meal updated successfully',
        updatedMeal: updatedMeal
      });
    } // Remove a meal option

  }, {
    key: "deleteMeal",
    value: function deleteMeal(req, res) {
      var id = parseInt(req.params.id, 10);
      var foundMeal;
      var itemIndex;

      _mealDb.default.map(function (meal, index) {
        if (meal.id === id) {
          foundMeal = meal;
          itemIndex = index;
        }
      });

      if (!foundMeal) {
        return res.status(404).send({
          status: 'false',
          message: 'Meal not found'
        });
      }

      _mealDb.default.splice(itemIndex, 1);

      return res.status(200).send({
        status: 'true',
        message: 'Meal deleted successfully'
      });
    }
  }]);

  return MealController;
}();

var mealController = new MealController();
var _default = mealController;
exports.default = _default;
//# sourceMappingURL=meal.controller.js.map