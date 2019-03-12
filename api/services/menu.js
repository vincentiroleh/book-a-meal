import Model from '../models';

const { Menu } = Model.Menu;

const MenuService = {
  getAllMenu() {
    return Menu.findAll({
      attributes: ['id', 'name', 'quantity', 'price', 'description'],
    });
  },

  getMenuById(id) {
    return Menu.findByPk(id, {
      attributes: ['id', 'name', 'quantity', 'price', 'description'],
    });
  },

  createMenu(menu) {
    Menu.create({
      name: menu.name,
      quantity: menu.quantity,
      price: menu.price,
      description: menu.description,
    });
    return menu;
  },

  updateMenu(id, menu) {
    Menu.update(menu, {
      where: {
        id,
      },
    });
    return menu;
  },

  deleteMenu(id) {
    Menu.destroy({
      where: {
        id,
      },
    });
    return [];
  },
};

export default MenuService;
