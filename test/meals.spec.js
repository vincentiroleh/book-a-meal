/* eslint-disable no-undef */
// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/index';

// Configure chai
chai.use(chaiHttp);
chai.should();

// Test for MEALS
describe('MEALS', () => {
  // Test for GET meals
  describe('GET /api/v1/meals', () => {
    it('it should GET all meals', (done) => {
      chai.request(app)
        .get('/api/v1/meals')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('it should return "WRONG URL" when wrong url is sent', (done) => {
      chai.request(app)
        .get('/api/v1/meals0')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  // Test the /GET/:id route
  describe('/GET /api/v1/meals/:id', () => {
    it('it should GET a meal by the given id', (done) => {
      const foundMeal = {
        id: 1,
        name: 'Fried Rice',
        price: 450,
        size: 'Medium',
      };
      chai.request(app)
        .get('/api/v1/meals/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.be.eql({
            status: 'true',
            message: 'meal retrieved successfully',
            foundMeal,
          });
          done();
        });
    });

    it('it should not get a meal when wrong id is passed', (done) => {
      chai.request(app)
        .get('/api/v1/meals/0')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.eql({
            status: 'false',
            message: 'Meal does not exist',
          });
          done();
        });
    });
  });

  // Test for POST meals
  describe('POST /api/v1/meals', () => {
    const meal = {
      name: 'Fried Rice',
      size: 'Medium',
      price: 450,
    };
    const newMeal = {
      id: 5,
      name: 'Fried Rice',
      size: 'Medium',
      price: 450,
    };
    it('it should not POST a meal without meals field', (done) => {
      chai.request(app)
        .post('/api/v1/meals')
        .send()
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.type.should.be.eql('application/json');
          done();
        });
    });

    it('it should not add a meal when fields: name, size, and price are not filled', (done) => {
      chai.request(app)
        .post('/api/v1/meals')
        .send({
          size: 'Medium',
          price: 450,
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.type.should.be.eql('application/json');
        });
      chai.request(app)
        .post('/api/v1/meals')
        .send({
          name: 'Fried Rice',
          size: '',
          price: 450,
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.type.should.be.eql('application/json');
        });
      chai.request(app)
        .post('/api/v1/meals')
        .send({
          name: 'Fried Rice',
          size: 'Medium',
          price: '',
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.type.should.be.eql('application/json');
          done();
        });
    });

    it('it should POST a meal', (done) => {
      chai.request(app)
        .post('/api/v1/meals')
        .send(meal)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.type.should.be.eql('application/json');
          res.body.should.be.eql({
            status: 'true',
            message: 'Meals added successfully',
            newMeal,
          });
          done();
        });
    });

    it('it should return "Meal does not exist" when a wrong URL is sent', (done) => {
      chai.request(app)
        .post('/api/v1/meals/0')
        .send()
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.type.should.be.eql('text/html');
          done();
        });
    });
  });

  // Modifying a meal option
  describe('PUT /api/v1/meals/:id', () => {
    it('it should return error message when wrong id is called for modification', (done) => {
      chai.request(app)
        .put('/api/v1/meals/0')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.eql({
            status: 'false',
            message: 'Meal not found',
          });
          done();
        });
    });
  });

  // Deleting a meal option
  describe('DELETE /api/v1/meals/:id', () => {
    it('it should delete meal with correct id', (done) => {
      chai.request(app)
        .delete('/api/v1/meals/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.eql({
            status: 'true',
            message: 'Meal deleted successfully',
          });
          done();
        });
    });

    it('it should return an error when wrong id is passed', (done) => {
      chai.request(app)
        .delete('/api/v1/meals/0')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.eql({
            status: 'false',
            message: 'Meal not found',
          });
          done();
        });
    });
  });
});
