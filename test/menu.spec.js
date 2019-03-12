import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/index';

chai.use(chaiHttp);
const should = chai.should();

// Test /Get route
describe('/Get menu', () => {
  it('get menu', (done) => {
    chai.request(app)
      .get('/api/v1/menus')
      .end((err, res) => {
        res.should.have.property('status', 200);
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
      done();
  });
});

// Test /Post route
describe('/POST menu', () => {
  it('post menu', (done) => {
    const menu = [{
        name: 'Romantic Dinner',
        size: 'large',
        price: 5000,
      },
      {
        name: 'Breakfast',
        size: 'small',
        price: 500,
      },
    ];
    chai.request(app)
      .post('/api/v1/menus')
      .send(menu)
      .end((err, res) => {
        res.should.have.property('status', 200);
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
  });
});

// Update menu test
describe('/PUT/:id menu', () => {
  it('update menu by id', (done) => {
    const menu = {
      name: 'Romantic Dinner',
      size: 'large',
      price: 5000,
    };
    chai.request(app)
      .put(`/api/v1/menus/ ${3}`)
      .send(menu)
      .end((err, res) => {
        res.should.have.property('status', 200);
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
  });
});

// delete menus test api
describe('/DELETE/:id menus', () => {
  it('delete menus by id', (done) => {
    chai.request(app)
      .delete(`/api/v1/menus/ ${3}`)
      .end((err, res) => {
        res.should.have.property('status', 200);
        res.body.should.be.a('object');
        console.log(res.body);
        done();
      });
  });
});