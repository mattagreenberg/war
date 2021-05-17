import client from './apiClient';

function getBalance(username) {
  return client(`/user/balance/${username}`);
};

function updateBalance(balance, username) {
  return client('/user/balance/update', { method: 'PUT', body: { balance, username } });
}

export { getBalance, updateBalance };