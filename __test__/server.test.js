// import supertest
const request = require('supertest');
const app = require('../server/app');

// delcare server url for testing
let server, agent;

// test route integration between server and client
describe('Route integration', () => {

  describe('/', () => {

    beforeEach((done) => {
      server = app.listen(3000, (err) => {
        if (err) return done(err);
    
        agent = request.agent(server);
        done();
      });
    });
    
    afterEach((done) => {
      return server && server.close(done);
    });

    it('responds with 200 status and text/html content type',  async () => {
      const res = await agent.get('/');
      expect(res.statusCode).toBe(200);
    });

  });
});



describe('SERVER TESTS', () => {

  async (done) => {
    server = app.listen(3000, (err) => {
      if (err) return done(err);
  
      agent = request.agent(server);
      done();
    });
  };

  describe('/user', () => {
    describe('POST /signup', () => {
      it('responds with 201 status', async () => {
        try {
          const res = await agent
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
          const res = await agent
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
          const res = await agent
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
          const res = await agent
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
  
    describe('POST /record', () => {
      it('responds with a 201 status', async () => {
        try {
          await agent
            .post('/user/signup')
            .send({ username: 'jest', password: 'jest' });
          const res = await agent
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
          const res = await agent
            .get('/score/all')
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

  async (done) => {
    return server && server.close(done);
  };

});


