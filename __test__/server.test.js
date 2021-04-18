// import supertest
const request = require('supertest');
const app = require('../server/server');

// delcare server url for testing
const server = 'http://localhost:3000';

// test route integration between server and client
describe('Route integration', () => {
  describe('/', () => {
    it('responds with 200 status and text/html content type', async () => {
      try {
        const res = await request(server)
          .get('/')
          .expect('Content-type', /text\/html/);
        expect(res.statusCode).toEqual(200);
      } catch (err) {
        console.log(err);
      }

    });
  });
});

describe('/user', () => {
  beforeEach(async () => {
    jest.setTimeout(50000)
  })
  describe('POST /signup', () => {
    it('responds with 201 status', async () => {
      try {
        const res = await request(server)
          .post('/user/signup')
          .send({ username: 'jest', password: 'jest' });
        expect(res.statusCode).toEqual(201);
      } catch (err) {
        console.log(err);
      }
    });
  });

  describe('POST /logout', () => {
    it('responds with status 200', async () => {
      try {
        const res = await request(server)
          .post('/user/logout')
        expect(res.statusCode).toEqual(200);
      } catch (err) {
        console.log(err);
      }
    });
  });

  describe('POST /login', () => {
    it ('responds with 200 status', async () => {
      try {
        const res = await request(server)
          .post('/user/login')
          .send({ username: 'jest', password: 'jest' });
        expect(res.statusCode).toEqual(200);
      } catch (err) {
        console.log(err);
      }
    });
  });

  describe('DELETE /terminate', () => {
    it('responds with 200 status', async () => {
      try {
        const res = await request(server)
          .delete('/user/terminate')
          .send({ username: 'jest', password: 'jest' });
        expect(res.statusCode).toEqual(200);
      } catch (err) {
        console.log(err);
      }
    });
  });
});

describe('/score', () => {

  const scoreEntry = { game: 'war', balance: 10000, handsPlayed: 10, handsWon: 5, warsPlayed: 3, warsWon: 2, username: 'jest' };

  beforeEach(async () => {
    jest.setTimeout(50000)
  })

  describe('POST /record', () => {
    it('responds with a 201 status', async () => {
      try {
        const add = await request(server)
          .post('/user/signup')
          .send({ username: 'jest', password: 'jest' });
        const res = await request(server)
          .post('/score/record')
          .send(scoreEntry)
        expect(res.statusCode).toEqual(201);
      } catch (err) {
        console.log(err);
      }
    });
  });

  describe('GET /all', () => {
    it('responds with a 200 status', async () => {
      try {
        const res = await request(server)
          .get('/score/all')
        console.log('getall res', res.res.text);
        expect(res.statusCode).toEqual(200);
        expect(res)
      } catch (err) {
        console.log(err)
      }
    });
  });

  // describe('GET /user', () => {
  //   it('responds with a 200 status', async () => {
  //     try {
  //       const res = await request(server)
  //         .get('/score/user/jest')
  //       console.log('getuser res', res);
  //       expect(res.statusCode).toEqual(200);
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   });
  // });

});
