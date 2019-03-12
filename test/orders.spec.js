import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/index';

chai.use(chaiHttp);
const should = chai.should();

// Test /Get route
describe('/Get order', () => {
  it('get orders', (done) => {
    chai.request(app)
      .get('/api/v1/orders')
      .end((err, res) => {
        res.should.have.property('status', 200);
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
  });
});

// Test /Post route
describe('/POST order', () => {
  it('post order', (done) => {
    const order = [{
      name: 'Egusi Soup',
      size: 'large',
      price: 650,
    },
    {
      name: 'Rice and Beans',
      size: 'small',
      price: 350,
    },
    ];
    chai.request(app)
      .post('/api/v1/orders')
      .send(order)
      .end((err, res) => {
        res.should.have.property('status', 200);
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
  });
});

// // Test /Get:id route
describe('/GET/:id order', () => {
  it('get order by id', (done) => {
    chai.request(app)
      .get(`/api/v1/orders/ ${3}`)
      .end((err, res) => {
        res.should.have.property('status', 200);
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
  });
});

// Update Order test
describe('/PUT/:id order', () => {
  it('update order by id', (done) => {
    const order = {
      name: 'egg',
      size: 'small',
      price: 50,
    };
    chai.request(app)
      .put(`/api/v1/orders/ ${3}`)
      .send(order)
      .end((err, res) => {
        res.should.have.property('status', 200);
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
  });
});

// delete order test api
describe('/DELETE/:id order', () => {
  it('delete order by id', (done) => {
    chai.request(app)
      .delete(`/api/v1/orders/ ${3}`)
      .end((err, res) => {
        res.should.have.property('status', 200);
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
  });
});