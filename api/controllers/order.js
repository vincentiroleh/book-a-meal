import jwt from 'jsonwebtoken';
import OrderService from '../services/order';

const message = 'You must be logged in to order';

const OrderController = {
  createOrder(req, res) {
    const newOrder = req.body;
    const createdOrder = OrderService.createOrder(newOrder);
    jwt.verify(req.token, 'secretkey', (err) => {
      if (err) {
        res.json({
          message,
        });
      } else {
        return res.json({
          status: 'success',
          data: createdOrder,
        }).status(201);
      }
    });
  },

  getAllOrder(req, res) {
    jwt.verify(req.token, 'secretkey', (err) => {
      if (err) {
        res.json({
          message,
        });
      } else {
        OrderService.getAllOrder().then((Order) => {
          return res.json({
            status: 'success',
            data: Order,
          }).status(200);
        });
      }
    });
  },

  getOrderById(req, res) {
    const [id] = [req.params.id];
    jwt.verify(req.token, 'secretkey', (err) => {
      if (err) {
        res.json({
          message,
        });
      } else {
        OrderService.getOrderById(id).then((Order) => {
          return res.json({
            status: 'success',
            data: Order,
          }).status(200);
        });
      }
    });
  },

  updateOrder(req, res) {
    const [id, Order] = [req.params.id, req.body];
    const updateOrder = OrderService.updateOrder(id, Order);
    jwt.verify(req.token, 'secretkey', (err) => {
      if (err) {
        res.json({
          message,
        });
      } else {
        return res.json({
          status: 'success',
          data: updateOrder,
        }).status(201);
      }
    });
  },

  deleteOrder(req, res) {
    const [id] = [req.params.id];
    const deleteOrder = OrderService.deleteOrder(id);
    jwt.verify(req.token, 'secretkey', (err) => {
      if (err) {
        res.json({
          message,
        });
      } else {
        return res.json({
          status: 'success',
          data: deleteOrder,
        }).status(200);
      }
    });
  },
};

export default OrderController;