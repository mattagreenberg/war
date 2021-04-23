import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import useForm from '../hooks/useForm';
import validate from '../utils/formValidationRules';
import {
  Form,
  TextInput,
  Button,
  ErrorMsg,
  ErrorContainer
} from '../styling/form.styling';

export function LoginForm({ signup }) {
  const history = useHistory();
  const { login, guestLogin } = useAuth();
  const {
    handleChange,
    handleSubmit,
    values,
    errors
  } = useForm(login, validate);

  const handleGuestLogin = (event) => {
    event.preventDefault();
    guestLogin();
    history.push('/game');
  };

  return (
    <Form signup={signup}>
      <ErrorContainer>
        {errors.username && (
          <ErrorMsg>{errors.username}</ErrorMsg>
        )}
        {errors.password && (
          <ErrorMsg>{errors.password}</ErrorMsg>
        )}
      </ErrorContainer>
      <TextInput 
        type='text' 
        placeholder='Username...' 
        value={values.username || ''}
        onChange={handleChange}
        aria-required='true'
        required
        name='username'
      />
      <TextInput 
        type='password' 
        placeholder='Password...' 
        value={values.password || ''} 
        onChange={handleChange}
        aria-required='true'
        required
        name='password'
      />
      <Button 
        title='login' 
        top={true}
        onClick={handleSubmit}
        disabled={!(values.username && values.password)}
        >
        Login
      </Button>
      <Button 
        title='guest' 
        top={false} 
        onClick={handleGuestLogin}>
        Play as Guest
      </Button>
    </Form>
  );
};

export function SignupForm({ signup }) {

  const { register } = useAuth();

  const {
    handleChange,
    handleSubmit,
    values,
    errors
  } = useForm(register, validate);
  
  return (
    <Form signup={signup}>
      <ErrorContainer>
        {errors.username && (
          <ErrorMsg>{errors.username}</ErrorMsg>
        )}
        {errors.password && (
          <ErrorMsg>{errors.password}</ErrorMsg>
        )}
      </ErrorContainer>
      <TextInput 
        type='text' 
        placeholder='Username...' 
        value={values.username || ''} 
        onChange={handleChange}
        maxLength='20'
        aria-required='true'
        required
        name='username'
      />
      <TextInput 
        type='password'
        placeholder='Password...' 
        value={values.password|| ''} 
        onChange={handleChange}
        minLength='8'
        maxLength='30'
        aria-required='true'
        required
        name='password'
      />
      <Button top={true} onClick={handleSubmit} disabled={!(values.username && values.password)}>Sign Up and Play</Button>
    </Form>
  );
};
