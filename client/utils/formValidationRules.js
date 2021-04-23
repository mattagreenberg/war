import Filter from 'bad-words';

const filter = new Filter();
filter.addWords('guest');

export default function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Username is required';
  } else if (filter.isProfane(values.username)) {
    errors.username = 'Username blocked';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }
  return errors;
};