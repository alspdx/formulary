import React from 'react';
import glamorous from 'glamorous';
import FormInput from './FormInput';
import FormButton from './FormButton';
import constants from './../constants';
const { colors, shadows } = constants;
import { Link } from 'react-router-dom';

const LoginForm = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '80px 120px',
  backgroundColor: colors.white,
  boxShadow: shadows.box1,
});

const LoginHeading = glamorous.h2({
  color: colors.primary,
  marginBottom: '20px',
  marginTop: 0,
});

const StyledSpan = glamorous.span({
  color: colors.black,
  fontSize: '14px',
  marginTop: '10px'
});

const SignUpLink = glamorous(Link)({
  color: colors.primary,
  textDecoration: 'none',
});

const loginInputs = [
  {
    inputType: 'email',
    labelText: 'Email'
  },
  {
    inputType: 'password',
    labelText: 'Password'
  }
];

const Login = () => (
  <LoginForm>
    <LoginHeading>Sign in</LoginHeading>
    <div>
      {loginInputs.map(input =>
        <FormInput key={input.type} inputType={input.inputType} labelText={input.labelText} />
      )}
    </div>
    <FormButton buttonText='Sign In' />
    <StyledSpan>
      Don't have an account?
      <SignUpLink to='/signup'> Sign up here!</SignUpLink>
    </StyledSpan>
  </LoginForm>
);

export default Login;
