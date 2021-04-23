import * as React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../client/views/Login.jsx';

describe('Login', () => {
  test('renders Login Component', () => {
    render(<Login />);
    // test component renders
    screen.debug();
  })
});

const setup = () => {
  const utils = render(<Login />);
  const input = utils.getByPlaceholderText('Username...');
  return {
    input,
    ...utils,
  }
};

it('calls handleSubmit prop on login button click', () => {

});

it ('calls handleGuesLogin prop on guest login button click', () => {

});

it('calls handleSignup prop on sign up hyperlink click', () => {

});

// it renders sign up and sign up inputs

// sign up button

// sign up x goes back to login

