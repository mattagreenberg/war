// import supertest
const request = require('supertest');
const server = require('../../../server/server');
const { createHttpTerminator } = require('http-terminator');

const httpTerminator = createHttpTerminator({ server })

describe('signup', () => {
  it('responds with 201 status if user details are formatted correctly', async () => {
    try {
      const res = await request(server)
        .post('/user/signup')
        .send({ username: 'jest', password: 'jestjest' });
      expect(res.statusCode).toBe(201);
    } catch (err) {
      console.log(err);
    }
  });

  it('responds with 400 status if username is missing from body', async () => {
    try {
      const res = await request(server)
        .post('/user/signup')
        .send({ password: 'jestjest' });
      expect(res.statusCode).toBe(400);
      expect(res.error.text).toBe('username and password are required');
    } catch (err) {
      console.log(err);
    }
  });

  it('responds with 400 status if password is missing from body', async () => {
    try {
      const res = await request(server)
        .post('/user/signup')
        .send({ username: 'fake' });
      expect(res.statusCode).toBe(400);
      expect(res.error.text).toBe('username and password are required');
    } catch (err) {
      console.log(err);
    }
  });

  it('responds with 409 if username is already in use', async () => {
    try {
      const res = await request(server)
        .post('/user/signup')
        .send({ username: 'jest', password: 'jestjest' });
      expect(res.statusCode).toBe(409);
      expect(res.error.text).toBe('username already in use');
      // figure out a way to test the jwt cookie was deleted
      // expect(!res.cookies.jwt)
    } catch (err) {
      console.log(err);
    }
  });
});

describe('logout', () => {
  it('responds with 200 status', async () => {
    try {
      const res = await request(server)
        .post('/user/logout');
      expect(res.statusCode).toBe(200);
    } catch (err) {
      console.log(err);
    }
  });

});

describe('login', () => {
  afterAll(async (done) => {
        try {
          await httpTerminator.terminate();
        } catch (err) {
          console.log(err);
        }
      });
  it('responds with 200 status', async () => {
    try {
      const res = await request(server)
        .post('/user/login')
        .send({ username: 'jest', password: 'jestjest' });
      expect(res.statusCode).toBe(200);
    } catch (err) {
      console.log(err);
    }
  });

  it('responds with 400 status if username is missing from body', async () => {
    try {
      const res = await request(server)
        .post('/user/login')
        .send({ password: 'jest' });
      expect(res.statusCode).toBe(400);
      expect(res.error.text).toBe('username and password are required')
    } catch (err) {
      console.log(err);
    }
  });

  it('responds with 400 status if password is missing from body', async () => {
    try {
      const res = await request(server)
        .post('/user/login')
        .send({ username: 'jest' });
      expect(res.statusCode).toBe(400);
      expect(res.error.text).toBe('username and password are required')
    } catch (err) {
      console.log(err);
    }
  });

  it('responds with 401 status if login details cannot be authenticated', async () => {
    try {
      const res = await request(server)
        .post('/user/login')
        .send({ username: 'fake', password: 'fakeuser' });
      expect(res.statusCode).toBe(401);
      expect(res.error.text).toBe('Unauthorized')
    } catch (err) {
      console.log(err);
    }
  });

});

// describe('delete user', () => {
//   afterAll(async (done) => {
//     try {
//       await httpTerminator.terminate();
//     } catch (err) {
//       console.log(err);
//     }
//   });

//   it('responds with 200 status if formatted correctly', async () => {
//     try {
//       const res = await request(server)
//         .delete('/user/terminate')
//         .send({ username: 'jest', password: 'jest' });
//       expect(res.statusCode).toBe(200);
//     } catch (err) {
//       console.log(err);
//     }
//   });

//   it('responds with 400 status if username is missing from body', async () => {
//     try {
//       const res = await request(server)
//         .delete('/user/terminate')
//         .send({ username: 'jest' });
//       expect(res.statusCode).toBe(400);
//       expect(res.error.text).toBe('username and password are required')
//     } catch (err) {
//       console.log(err);
//     }
//   });

//   it('responds with 400 status if password is missing from body', async () => {
//     try {
//       const res = await request(server)
//         .delete('/user/terminate')
//         .send({ username: 'jest' });
//       expect(res.statusCode).toBe(400);
//       expect(res.error.text).toBe('username and password are required')
//     } catch (err) {
//       console.log(err);
//     }
//   });

//   it('responds with 401 status if user details cannot be authenticated', async () => {
//     try {
//       const res = await request(server)
//         .delete('/user/terminate')
//         .send({ username: 'fake', password: 'fakeuser' });
//       expect(res.statusCode).toBe(401);
//       expect(res.error.text).toBe('Unauthorized')
//     } catch (err) {
//       console.log(err);
//     }
//   });
// });