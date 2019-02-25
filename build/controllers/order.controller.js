"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../utils/order.Db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OrderController =
/*#__PURE__*/
function () {
  function OrderController() {
    _classCallCheck(this, OrderController);
  }

  _createClass(OrderController, [{
    key: "createOrder",
    // Post Orders (Select the meal option from the menu)
    value: function createOrder(req, res) {
      if (!req.body.meal) {
        return res.status(400).send({
          status: 'false',
          message: 'meal required'
        });
      }

      if (!req.body.quantity) {
        return res.status(400).send({
          status: 'false',
          message: 'quantity of food is required'
        });
      }

      if (!req.body.delivery_address) {
        return res.status(400).send({
          status: 'false',
          message: 'Delivery address is required'
        });
      }

      var newOrder = {
        id: _order.default.length + 1,
        meal: req.body.meal,
        quantity: req.body.quantity,
        delivery_address: req.body.delivery_address
      };

      _order.default.push(newOrder);

      return res.status(201).send({
        status: 'true',
        message: 'Order placed successfully',
        newOrder: newOrder
      });
    } // Modify an order

  }, {
    key: "updateOrder",
    value: function updateOrder(req, res) {
      var id = parseInt(req.params.id, 10);
      var foundOrder;
      var itemIndex;

      _order.default.map(function (meal, index) {
        if (meal.id === id) {
          foundOrder = meal;
          itemIndex = index;
        }
      });

      if (!foundOrder) {
        return res.status(404).send({
          status: 'false',
          message: 'Order not found'
        });
      }

      if (!req.body.meal) {
        return res.status(400).send({
          status: 'false',
          message: 'meal is required'
        });
      }

      if (!req.body.quantity) {
        return res.status(400).send({
          status: 'false',
          message: 'quantity of order is required'
        });
      }

      if (!req.body.delivery_address) {
        return res.status(400).send({
          status: 'false',
          message: 'delivery_address is required'
        });
      }

      var updatedOrder = {
        id: foundOrder.id,
        meal: req.body.meal || foundOrder.meal,
        quantity: req.body.quantity || foundOrder.quantity,
        delivery_address: req.body.delivery_address || foundOrder.delivery_address
      };

      _order.default.splice(itemIndex, 1, updatedOrder);

      return res.status(201).send({
        status: 'true',
        message: 'Order updated successfully',
        updatedOrder: updatedOrder
      });
    } // Get orders (Get all the orders)

  }, {
    key: "getAllOrders",
    value: function getAllOrders(req, res) {
      var Orders = _order.default;
      return res.status(200).send({
        status: 'true',
        message: 'Orders retrieved successfully',
        Orders: Orders
      });
    }
  }]);

  return OrderController;
}();

var orderController = new OrderController();
var _default = orderController;
exports.default = _default;
//# sourceMappingURL=order.controller.js.map