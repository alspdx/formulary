import React from 'react';
import glamorous from 'glamorous';
import FormInput from './FormInput';
import colors from './../constants';

const LoginDiv = glamorous.div({
  backgroundColor: colors.white,
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const forms = ['email', 'password'];

const Login = () => (
  <LoginDiv>
    {forms.map(formType =>
      <FormInput key={formType} formType={formType} />
    )}
  </LoginDiv>
);

export default Login;
