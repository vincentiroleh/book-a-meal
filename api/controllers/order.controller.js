/* eslint-disable class-methods-use-this */
import Order from '../utils/order.Db';

class OrderController {
  // Post Orders (Select the meal option from the menu)
  createOrder(req, res) {
    if (!req.body.meal) {
      return res.status(400).send({
        success: 'false',
        message: 'meal required',
      });
    } if (!req.body.quantity) {
      return res.status(400).send({
        success: 'false',
        message: 'quantity of food is required',
      });
    } if (!req.body.delivery_address) {
      return res.status(400).send({
        success: 'false',
        message: 'Delivery address is required',
      });
    }
    const newOrder = {
      id: Order.length + 1,
      meal: req.body.meal,
      quantity: req.body.quantity,
      delivery_address: req.body.delivery_address,
    };
    Order.push(newOrder);
    return res.status(201).send({
      success: 'true',
      message: 'Order is on the way to you doorpost',
      newOrder,
    });
  }

  // Modify an order
  updateOrder(req, res) {
    const id = parseInt(req.params.id, 10);

    let foundOrder;
    let itemIndex;

    Order.map((meal, index) => {
      if (meal.id === id) {
        foundOrder = meal;

        itemIndex = index;
      }
    });

    if (!foundOrder) {
      return res.status(404).send({

        success: 'false',

        message: 'Order not found',
      });
    }

    if (!req.body.meal) {
      return res.status(400).send({

        success: 'false',

        message: 'meal is required',
      });
    } if (!req.body.quantity) {
      return res.status(400).send({

        success: 'false',

        message: 'quantity of order is required',

      });
    } if (!req.body.delivery_address) {
      return res.status(400).send({

        success: 'false',

        message: 'Delivery Address is required',
      });
    }

    const updatedOrder = {
      id: foundOrder.id,

      meal: req.body.meal || foundOrder.meal,

      quantity: req.body.quantity || foundOrder.quantity,

      delivery_address: req.body.delivery_address || foundOrder.delivery_address,

    };

    Order.splice(itemIndex, 1, updatedOrder);

    return res.status(201).send({
      success: 'true',
      message: 'Order updated successfully',
      updatedOrder,
    });
  }

  // Get orders (Get all the orders)
  getAllOrders(req, res) {
    const Orders = new Order();
    return res.status(200).send({
      status: 'true',
      message: 'Orders retrieved successfully',
      Orders,
    });
  }
}
const orderController = new OrderController();
export default orderController;
