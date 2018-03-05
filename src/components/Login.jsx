import React from 'react';
import glamorous from 'glamorous';
import FormInput from './FormInput';
import FormButton from './FormButton';
import constants from './../constants';
const { colors, shadows } = constants;

const LoginForm = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '440px',
  width: '660px',
  backgroundColor: colors.white,
  boxShadow: shadows.box1,
});

const LoginHeading = glamorous.h2({
  color: colors.primary,
  marginBottom: '20px',
  marginTop: 0,
});

const forms = ['email', 'password'];

const Login = () => (
  <LoginForm>
    <LoginHeading>Sign In</LoginHeading>
    <div>
      {forms.map(formType =>
        <FormInput key={formType} formType={formType} />
      )}
    </div>
    <FormButton title='Sign In' />
  </LoginForm>
);

export default Login;
