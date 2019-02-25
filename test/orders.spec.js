/* eslint-disable no-undef */
// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/index';

// Configure chai
chai.use(chaiHttp);
chai.should();

// Test for ORDERS

describe('ORDERS', () => {
  // Test for POST orders
  describe('POST /api/v1/orders', () => {
    const newOrder = {
      id: 1,
      meal: 'Rice and Stew',
      quantity: 3,
      delivery_address: 'Ikorodu',
    };

    it('it should not POST an order without orders field', (done) => {
      chai.request(app)
        .post('/api/v1/orders')
        .send()
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.type.should.be.eql('application/json');
          done();
        });
    });

    it('it should not add an order when fields: meal, quantity, and delivery_address are not filled', (done) => {
      chai.request(app)
        .post('/api/v1/orders')
        .send({
          meal: '',
          quantity: 3,
          delivery_address: 'Ikorodu',
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.type.should.be.eql('application/json');
        });
      chai.request(app)
        .post('/api/v1/orders')
        .send({
          meal: 'Rice and Stew',
          quantity: '',
          delivery_address: 'Ikorodu',
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.type.should.be.eql('application/json');
        });
      chai.request(app)
        .post('/api/v1/orders')
        .send({
          meal: 'Rice and Stew',
          quantity: 3,
          delivery_address: '',
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.type.should.be.eql('application/json');
          done();
        });
    });
  });

  // Test for GET orders
  describe('GET /api/v1/orders', () => {
    it('it should GET all orders', (done) => {
      chai.request(app)
        .get('/api/v1/orders')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('it should return "WRONG URL" when wrong url is sent', (done) => {
      chai.request(app)
        .get('/api/v1/orders/0')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  // Modifying a order option
  describe('PUT /api/v1/meals/:id', () => {
    it('it should return error message when wrong id is called for modification', (done) => {
      chai.request(app)
        .put('/api/v1/orders/0')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.eql({
            status: 'false',
            message: 'Order not found',
          });
          done();
        });
    });
  });
});