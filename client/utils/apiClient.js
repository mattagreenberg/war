// import "isomorphic-fetch";
// import { server } from '../../server/config';

async function client(endpoint, { body, ...customConfig } = {}) {
  const headers = {'Content-Type': 'application/json'};

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const res = await fetch(endpoint, config);
    return res;
  } catch (err) {
    console.log(err);
  };
};

export default client;