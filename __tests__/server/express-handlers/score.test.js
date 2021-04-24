// import supertest
const request = require('supertest');
const server = require('../../../server/server');
const { createHttpTerminator } = require('http-terminator');

const httpTerminator = createHttpTerminator({ server })

describe('record scores', () => {
  const scoreEntry = { game: 'war', balance: 10000, handsPlayed: 10, handsWon: 5, warsPlayed: 3, warsWon: 2, username: 'tom' };
  const badScoreEntry = { game: 'war', balance: 10000, handsWon: 5, warsPlayed: 3 };

  it('responds with 201 status when body is formatted correctly', async () => {
    try {
      await request(server)
        .post('/user/signup')
        .send({ username: 'tom', password: 'jestjest' });
      const res = await request(server)
        .post('/score/record')
        .send(scoreEntry)
      expect(res.statusCode).toBe(201);
    } catch (err) {
      console.log(err);
    }
  });

  it('responds with a 400 status when body is missing values', async () => {
    try {
      const res = await request(server)
        .post('/score/record')
        .send(badScoreEntry)
      expect(res.statusCode).toBe(400);
      expect(res.error.text).toBe('request missing values')
    } catch (err) {
      console.log(err);
    }
  });
});

  describe('read scores', () => {
    afterAll(async (done) => {
      try {
        await httpTerminator.terminate();
      } catch (err) {
        console.log(err);
      }
    });

    it('it responds with 200 status if scores are sent in request', async () => {
      try {
        const res = await request(server)
          .get('/score/all')
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeTruthy();
      } catch (err) {
        console.log(err)
      }
    });

  describe('GET /user', () => {
    it('responds with 200 status if scores are sent in request', async () => {
      try {
        const res = await request(server)
          .get('/score/user/tom')
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeTruthy();
      } catch (err) {
        console.log(err)
      }
    });
  });
});