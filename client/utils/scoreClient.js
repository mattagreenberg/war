import client from './apiClient';

function readUser(username) {
  return client(`/score/user/${username}`);
}

function readAll() {
  return client('/score/all')
}

function record(scoreDetails) {
  return client('/score/record', { body: scoreDetails });
};

export { readUser, readAll, record };