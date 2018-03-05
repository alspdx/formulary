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

const SignUpLink = glamorous(Link)({
  color: colors.primary,
  fontSize: '14px',
  textDecoration: 'none',
  marginTop: '10px',
});

const forms = ['email', 'password'];

const Login = () => (
  <LoginForm>
    <LoginHeading>Sign in</LoginHeading>
    <div>
      {forms.map(formType =>
        <FormInput key={formType} formType={formType} />
      )}
    </div>
    <FormButton buttonText='Sign In' />
    <SignUpLink to='/signup'>Or sign up here!</SignUpLink>
  </LoginForm>
);

export default Login;
