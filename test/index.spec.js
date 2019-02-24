/* eslint-disable no-undef */
// Import the dependencies for testing
import chai, {
  expect,
} from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/index';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('App Entry Points', () => {
  it('it should return The API is working', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.text).to.be.eql('Welcome to Meal Booking API');
        done();
      });
  });
});
