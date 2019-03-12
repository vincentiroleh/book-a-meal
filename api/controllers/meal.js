import jwt from 'jsonwebtoken';
import MealService from '../services/meal';

const ErroMsg = 'Unaunthorized access';

const MealController = {
  createMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MealService.createMeal(newMeal);
    jwt.verify(req.token, 'secretKey', (err) =>{
      if (err) {
        res.json({
          ErroMsg,
        });
      } else {
        return res.json({
          status: 'success',
          data: createdMeal,
        }).status(201);
      }
    })
  },

  getAllMeal(req, res) {
    jwt.verify(req.token, 'secretKey', (err) => {
      if (err) {
        res.json({
          ErroMsg,
        });
      } else {
        MealService.getAllMeal().then((meal)=> {
          return res.json({
            status: 'success',
            data: meal,
          }).status(200);
        });
      }
    })
  },

  getMealById(req, res) {
    const [id] = [req.params.id];
    jwt.verify(req.token, 'secretKey', (err) => {
      if (err) {
        res.json({
          ErroMsg,
        });
      } else {
        MealService.getMealById(id).then((meal) => {
          return res.json({
            status: 'success',
            data: meal,
          }).status(200);
        });
      }
    });    
  },

  updateMeal(req, res) {
    const [id, meal] = [req.params.id, req.body];
    const updateMeal = MealService.updateMeal(id, meal);
    jwt.verify(req.token, 'secretKey', (err) => {
      if (err) {
        res.json({
          ErroMsg,
        });
      } else {
        return res.json({
          status: 'success',
          data: updateMeal,
        }).status(201);
      }
    });
  },

  deleteMeal(req, res) {
    const [id] = [req.params.id];
    const deleteMeal = MealService.deleteMeal(id);
    jwt.verify(req.token, 'secretKey', (err) => {
      if (err) {
        res.json({
          ErroMsg,
        });
      } else {
        return res.json({
          status: 'success',
          data: deleteMeal,
        }).status(200);
      }
    });    
  }
};

export default MealController;