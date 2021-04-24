import * as React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, fireEvent, waitFor, screen, act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import { SignupForm, LoginForm } from '../../../client/components/Form.jsx';
import { AuthProvider } from '../../../client/context/authContext';
import { useHistory } from 'react-router';

expect.extend(toHaveNoViolations);

describe('LoginForm', () => {

  let container = null;

  let result = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    result  = renderHook(() => useHistory());
    result = result.result;
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    result = null;
  });

  it('renders the LoginForm component', () => {
    const { getByPlaceholderText, getByTitle } = render((<AuthProvider><LoginForm signup={false} /></AuthProvider>), container);

    // renders inputs
    getByPlaceholderText('Username...');
    getByPlaceholderText('Password...');
  
    // renders buttons
    getByTitle('login');
    getByTitle('guest');

  });

  it('should have no accessibility violations', async () => {
     const { container } = render((<AuthProvider><LoginForm signup={false} /></AuthProvider>), container);

     const result = await axe(container);
     expect(result).toHaveNoViolations();
  });
  
  it('responds with 200 status on correct login', async () => {
   
    const fakeResponse = {
      status: 200
    };

    global.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        json: () => Promise.resolve(fakeResponse)
      })
    });

    await act(async () => {
      const { getByPlaceholderText, getByTitle } = render((<AuthProvider><LoginForm signup={false} /></AuthProvider>), container);
      
      const usernameInput = getByPlaceholderText('Username...');
      const passwordInput = getByPlaceholderText('Password...');
      fireEvent.change(usernameInput, { target: { value: 'jest' } });
      fireEvent.change(passwordInput, { target: { value: 'testtest' } });
      fireEvent.click(getByTitle('login'));
    });

    global.fetch.mockRestore();
    delete global.fetch;
  });
  
  it('does not allow user to click login button if username and password input fields are empty', () => {
    const { getByTitle, getByPlaceholderText } = render((<AuthProvider><LoginForm signup={false} /></AuthProvider>), container);
  
    const usernameInput = getByPlaceholderText('Username...');
    fireEvent.change(usernameInput, { target: { value: 'jest' } });
    !(fireEvent.click(getByTitle('login')));
  });
  
  // xit('allows user to click play as guest button', async () => {
  //   jest.mock('react-router-dom', () => ({
  //     ...jest.requireActual('react-router-dom'),
  //     useHistory: () => ({
  //       push: jest.fn()
  //     })
  //   }));

  //   const { getByTitle } = render((<AuthProvider><LoginForm signup={false} /></AuthProvider>), container);
  
  //   fireEvent.click(getByTitle('guest'));

  //   // test for correct redirect to /game endpooint
  // });
});

describe('SignupForm', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders the SignupForm component', () => {
    const { getByTitle, getByPlaceholderText } = render((<AuthProvider><SignupForm signup={true} /></AuthProvider>), container);
    
    // inputs
    getByPlaceholderText('Username...');
    getByPlaceholderText('Password...');
  
    // buttons
    getByTitle('signup');
  });

  it('should have no accessibility violations', async () => {
    const { container } = render((<AuthProvider><SignupForm signup={true} /></AuthProvider>), container);

    const result = await axe(container);
    expect(result).toHaveNoViolations();
 });
  
  it('responds with status 201 if click of signup button is successfull', async () => {
    
  
    const fakeResponse = {
      status: 201
    };

    global.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        json: () => Promise.resolve(fakeResponse)
      })
    });

    await act(async () => {
      const { getByTitle, getByPlaceholderText } = render((<AuthProvider><SignupForm signup={true} /></AuthProvider>), container);
      
      const usernameInput = getByPlaceholderText('Username...');
      const passwordInput = getByPlaceholderText('Password...');
      fireEvent.change(usernameInput, { target: { value: 'jest' } });
      fireEvent.change(passwordInput, { target: { value: 'testtest' } });
      fireEvent.click(getByTitle('signup'));;
    });

    global.fetch.mockRestore();
    delete global.fetch;
  });
  
  it('does not allow user to click signup button if username and password input fields are empty', () => {
    const { getByTitle, getByPlaceholderText } = render((<AuthProvider><SignupForm signup={true} /></AuthProvider>), container);
    
    const usernameInput = getByPlaceholderText('Username...');
    fireEvent.change(usernameInput, { target: { value: 'jest' } });
    !(fireEvent.click(getByTitle('signup')));
  });

  it('renders an error message if password value is less than 8 characters when signup button is clicked', async () => {
    const { getByTitle, getByPlaceholderText, getByText } = render((<AuthProvider><SignupForm signup={true} /></AuthProvider>), container);
  
    const usernameInput = getByPlaceholderText('Username...');
    const passwordInput = getByPlaceholderText('Password...');
    fireEvent.change(usernameInput, { target: { value: 'jest' } });
    fireEvent.change(passwordInput, { target: { value: 'test' } });
    fireEvent.click(getByTitle('signup'));

    await waitFor(() => getByText('Password must be 8 or more characters'));
  });

  it('renders and error message if username contains profanity', async () => {
    const { getByTitle, getByPlaceholderText, getByText } = render((<AuthProvider><SignupForm signup={true} /></AuthProvider>), container);
  
    const usernameInput = getByPlaceholderText('Username...');
    const passwordInput = getByPlaceholderText('Password...');
    fireEvent.change(usernameInput, { target: { value: 'fuck' } });
    fireEvent.change(passwordInput, { target: { value: 'testtest' } });
    fireEvent.click(getByTitle('signup'));

    await waitFor(() => getByText('Username blocked'));
  });

  it('renders an error message if username is the word guest', async () => {
    const { getByTitle, getByPlaceholderText, getByText } = render((<AuthProvider><SignupForm signup={true} /></AuthProvider>), container);

    const usernameInput = getByPlaceholderText('Username...');
    const passwordInput = getByPlaceholderText('Password...');
    fireEvent.change(usernameInput, { target: { value: 'guest' } });
    fireEvent.change(passwordInput, { target: { value: 'testtest' } });
    fireEvent.click(getByTitle('signup'));

    await waitFor(() => getByText('Username blocked'));
  });
});