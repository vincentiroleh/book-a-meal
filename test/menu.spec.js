/* eslint-disable no-undef */
// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/index';

// Configure chai
chai.use(chaiHttp);
chai.should();

// Test for MEALS
describe('MENU', () => {
  // TEST FOR POST MENU
  describe('GET /menu', () => {
    it('it should get menu for the day', (done) => {
      chai.request(app)
        .get('/api/v1/menu')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
  describe('POST /menu', () => {
    it('it should create menu for the day', (done) => {
      const menu = {
        id: 1,
        title: 'Evening Selection',
        date: new Date(),
        list: ['Rice and beans', 'Pizza and coke', 'Eba and Ofe'],
      };
      chai.request(app)
        .post('/api/v1/menu')
        .send(menu)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
