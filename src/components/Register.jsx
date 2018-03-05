import React from 'react';
import glamorous from 'glamorous';
import FormInput from './FormInput';
import FormButton from './FormButton';
import constants from './../constants';
const { colors, shadows } = constants;
import { Link } from 'react-router-dom';

const RegisterForm = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '80px 120px',
  backgroundColor: colors.white,
  boxShadow: shadows.box1,
});

const StyledSpan = glamorous.span({
  color: colors.darkGray,
  fontSize: '14px',
  marginTop: '10px'
});

const LogInLink = glamorous(Link)({
  color: colors.primary,
  textDecoration: 'none',
});

const registerInputs = [
  {
    inputType: 'text',
    labelText: 'Username'
  },
  {
    inputType: 'email',
    labelText: 'Email'
  },
  {
    inputType: 'password',
    labelText: 'Password'
  }
];

const Register = () => (
  <RegisterForm>
    <div>
      {registerInputs.map(input =>
        <FormInput key={input.labelText} inputType={input.inputType} labelText={input.labelText} />
      )}
    </div>
    <FormButton buttonText='Join Formulary!' />
    <StyledSpan>
      Already have an account?
      <LogInLink to='/'> Sign In here!</LogInLink>
    </StyledSpan>
  </RegisterForm>
);

export default Register;
