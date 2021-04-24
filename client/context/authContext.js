import * as React from 'react';
import * as authClient from '../utils/authClient';

const AuthContext = React.createContext({});

function AuthProvider(props) {

  const [data, setData] = React.useState({user: null});


  const login = ({ username, password }) => {
    setData({user: { username }})
    return authClient.login(username, password);
  };

  const register = ({ username, password }) => {
    setData({user: { username }})
    return authClient.register(username, password);
  };

  const logout = () => {
    authClient.logout();
    setData({user: null});
  };

  const guestLogin = () => {
    setData({user: { username: 'guest' }});
  };
    
  const authContextValue = {
    login,
    logout,
    register,
    data,
    guestLogin
  };
  return <AuthContext.Provider value={authContextValue} {...props} />;
};

function useAuth() {
  return React.useContext(AuthContext);
};

export { AuthProvider, useAuth };