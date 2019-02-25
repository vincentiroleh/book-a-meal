"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _menu = _interopRequireDefault(require("../controllers/menu.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// imported express
// Import mealsController
// Initialized express router
var router = _express.default.Router(); // Menu ENDPOINTS


router.post('/', _menu.default.createMenu);
router.get('/', _menu.default.getMenu);
var _default = router;
exports.default = _default;
//# sourceMappingURL=menu.route.js.map