import client from './apiClient';

function register(username, password) {
  return client('/user/signup', { body: { username, password } });
};

function login(username, password) {
  return client('/user/login', { body: { username, password } });
};

function logout() {

};

function terminate(username, password) {
  return client('/user/terminate', { method: 'DELETE', body: { username, password } });
}

export { register, login, logout };


