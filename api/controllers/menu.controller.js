/* eslint-disable class-methods-use-this */
import Menu from '../utils/menuDb';

class MenuController {
  // Post Menu (Setup the menu for the day)
  createMenu(req, res) {
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title of menu is required',
      });
    } if (!req.body.date) {
      return res.status(400).send({
        success: 'false',
        message: 'date is required',
      });
    } if (!req.body.list) {
      return res.status(400).send({
        success: 'false',
        message: 'list of meals to be added is required',
      });
    }
    const newMenu = {
      id: Menu.length + 1,
      title: req.body.title,
      date: req.body.date,
      list: req.body.list,
    };
    Menu.push(newMenu);
    return res.status(201).send({
      success: 'true',
      message: 'Menu added successfully',
      newMenu,
    });
  }

  getMenu(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'Menu of the day retrieved successfully',
      Menu,
    });
  }
}

const menuController = new MenuController();
export default menuController;
