import React from 'react';
import glamorous from 'glamorous';
import FormInput from './FormInput';
import FormButton from './FormButton';
import colors from './../constants';

const LoginForm = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '440px',
  width: '660px',
  backgroundColor: colors.white,
});

const LoginHeading = glamorous.h2({
  color: colors.primary,
  margin: 0
});

const forms = ['email', 'password'];

const Login = () => (
  <LoginForm>
    <LoginHeading>Sign In</LoginHeading>
    {forms.map(formType =>
      <FormInput key={formType} formType={formType} />
    )}
    <FormButton title='Sign In' />
  </LoginForm>
);

export default Login;
