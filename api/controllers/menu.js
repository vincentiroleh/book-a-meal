import MenuService from '../services/menu';
import jwt from 'jsonwebtoken';
const ErroMsg = 'Unaunthorized access';

const MenuController = {
  createMenu(req, res) {
    const newMenu = req.body;
    const createdMenu = MenuService.createMenu(newMenu);
    jwt.verify(req.token, 'secretKey', (err) => {
      if (err) {
        res.json({
          ErroMsg,
        });
      } else {
        return res.json({
          status: 'success',
          data: createdMenu,
        }).status(201);
      }
    });
  },

  getAllMenu(req, res) {
    jwt.verify(req.token, 'secretKey', (err) => {
      if (err) {
        res.json({
          ErroMsg,
        });
      } else {
        MenuService.getAllMenu().then((Menu) => {
          return res.json({
            status: 'success',
            data: Menu,
          }).status(200);
        });
      }
    });
  },

  getMenuById(req, res) {
    const [id] = [req.params.id];
    jwt.verify(req.token, 'secretKey', (err) => {
      if (err) {
        res.json({
          ErroMsg,
        });
      } else {
        MenuService.getMenuById(id).then((Menu) => {
          return res.json({
            status: 'success',
            data: Menu,
          }).status(200);
        });
      }
    });
  },

  updateMenu(req, res) {
    const [id, Menu] = [req.params.id, req.body];
    const updateMenu = MenuService.updateMenu(id, Menu);
    jwt.verify(req.token, 'secretKey', (err) => {
      if (err) {
        res.json({
          ErroMsg,
        });
      } else {
        return res.json({
          status: 'success',
          data: updateMenu,
        }).status(201);
      }
    });
  },

  deleteMenu(req, res) {
    const [id] = [req.params.id];
    const deleteMenu = MenuService.deleteMenu(id);
    jwt.verify(req.token, 'secretKey', (err) => {
      if (err) {
        res.json({
          ErroMsg,
        });
      } else {
        return res.json({
          status: 'success',
          data: deleteMenu,
        }).status(200);
      }
    });    
  },
};

export default MenuController;