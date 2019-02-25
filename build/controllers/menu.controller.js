"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menuDb = _interopRequireDefault(require("../utils/menuDb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MenuController =
/*#__PURE__*/
function () {
  function MenuController() {
    _classCallCheck(this, MenuController);
  }

  _createClass(MenuController, [{
    key: "createMenu",
    // Post Menu (Setup the menu for the day)
    value: function createMenu(req, res) {
      if (!req.body.title) {
        return res.status(400).send({
          success: 'false',
          message: 'title of menu is required'
        });
      }

      if (!req.body.date) {
        return res.status(400).send({
          success: 'false',
          message: 'date is required'
        });
      }

      if (!req.body.list) {
        return res.status(400).send({
          success: 'false',
          message: 'list of meals to be added is required'
        });
      }

      var newMenu = {
        id: _menuDb.default.length + 1,
        title: req.body.title,
        date: req.body.date,
        list: req.body.list
      };

      _menuDb.default.push(newMenu);

      return res.status(201).send({
        success: 'true',
        message: 'Menu added successfully',
        newMenu: newMenu
      });
    }
  }, {
    key: "getMenu",
    value: function getMenu(req, res) {
      return res.status(200).send({
        success: 'true',
        message: 'Menu of the day retrieved successfully',
        Menu: _menuDb.default
      });
    }
  }]);

  return MenuController;
}();

var menuController = new MenuController();
var _default = menuController;
exports.default = _default;
//# sourceMappingURL=menu.controller.js.map