"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _order = _interopRequireDefault(require("../controllers/order.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// imported express
// Import mealsController
// Initialized express router
var router = _express.default.Router(); // Menu ENDPOINTS


router.post('/', _order.default.createOrder);
router.put('/:id', _order.default.updateOrder);
router.get('/', _order.default.getAllOrders);
var _default = router;
exports.default = _default;
//# sourceMappingURL=order.route.js.map