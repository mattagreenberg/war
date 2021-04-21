// import supertest
const request = require('supertest');
const server = require('../server/server');
const { createHttpTerminator } = require('http-terminator');

const httpTerminator = createHttpTerminator({ server })

describe('/user', () => {

  it('A POST request with unique username and password to /user/signup responds with 201 status', async () => {
    try {
      const res = await request(server)
        .post('/user/signup')
        .send({ username: 'jest', password: 'jest' });
      expect(res.statusCode).toBe(201);
    } catch (err) {
      console.log(err);
    }
  });

  it('A POST request to /user/logout responds with status 200', async () => {
    try {
      const res = await request(server)
        .post('/user/logout');
      expect(res.statusCode).toBe(200);
    } catch (err) {
      console.log(err);
    }
  });

  it ('A POST request with correct username and password to /user/login responds with 200 status', async () => {
    try {
      const res = await request(server)
        .post('/user/login')
        .send({ username: 'jest', password: 'jest' });
      expect(res.statusCode).toBe(200);
    } catch (err) {
      console.log(err);
    }
  });

  it('A DELETE request with correct username and password to /user/terminate responds with 200 status', async () => {
    try {
      const res = await request(server)
        .delete('/user/terminate')
        .send({ username: 'jest', password: 'jest' });
      expect(res.statusCode).toBe(200);
    } catch (err) {
      console.log(err);
    }
  });
});

describe('/score', () => {

  afterAll(async (done) => {
    try {
      await httpTerminator.terminate();
    } catch (err) {
      console.log(err);
    }
  });

  const scoreEntry = { game: 'war', balance: 10000, handsPlayed: 10, handsWon: 5, warsPlayed: 3, warsWon: 2, username: 'jest' };

  it('A POST request to /user/signup with correctly formatted score data responds with a 201 status', async () => {
    try {
      await request(server)
        .post('/user/signup')
        .send({ username: 'jest', password: 'jest' });
      const res = await request(server)
        .post('/score/record')
        .send(scoreEntry)
      expect(res.statusCode).toBe(201);
    } catch (err) {
      console.log(err);
    }
  });

  it('A GET request to /score/all responds with a 200 status', async () => {
    try {
      const res = await request(server)
        .get('/score/all')
      expect(res.statusCode).toBe(200);
      expect(res)
    } catch (err) {
      console.log(err)
    }
  });

  // describe('GET /user', () => {
  //   it('responds with a 200 status', async () => {
  //     try {
  //       const res = await agent
  //         .get('/score/user/jest')
  //       console.log('getuser res', res);
  //       expect(res.statusCode).toEqual(200);
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   });
  // });

});


