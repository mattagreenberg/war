import * as React from 'react';
import { LoginForm, SignupForm } from '../components/Form.jsx';
import ThemeToggle from '../components/ThemeToggle.jsx';
import { DiceSVG } from '../utils/svg/svg.jsx';
import { useTheme } from '../context/themeContext';
import {
  Main,
  Page,
  Container,
  LoginContainer,
  SignupContainer,
  Header,
  X,
  SignupText,
} from '../styling/login.styling';
import { ThemeContainer } from '../styling/themeToggle.styling';
import { useHistory } from 'react-router';

export default function Login() {

  const history = useHistory();

  const { theme, updateTheme } = useTheme();

  const [signup, setSignup] = React.useState(false);

  const handleSignup = (event) => {
    signup ? setSignup(false) : setSignup(true);
  };

  return (
    <Main theme={theme}>
      <ThemeContainer>
        <ThemeToggle />
      </ThemeContainer>
      <Page theme={theme}>
        <Container>
          <LoginContainer signup={signup} theme={theme}>
            <DiceSVG theme={theme} />
            <LoginForm signup={signup} />
          </LoginContainer>
          <SignupContainer signup={signup} theme={theme}>
            {signup
              ? (<>
                  <X onClick={handleSignup}><div>&#10060;</div></X>
                  <DiceSVG theme={theme} />
                  <Header><p>Sign Up</p></Header>
                  <SignupForm signup={signup} />
                </>)
              : (<SignupText>Don't have an account? <span style={{color: 'blue', cursor: 'pointer'}} onClick={handleSignup}>Sign Up</span></SignupText>)}
          </SignupContainer>
        </Container>
      </Page>
    </Main>
  );
};

