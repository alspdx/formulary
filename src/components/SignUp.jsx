import React from 'react';
import glamorous from 'glamorous';
import FormInput from './FormInput';
import FormButton from './FormButton';
import constants from './../constants';
const { colors, shadows } = constants;
import { Link } from 'react-router-dom';

const SignUpForm = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '80px 120px',
  backgroundColor: colors.white,
  boxShadow: shadows.box1,
});

const SignUpHeading = glamorous.h2({
  color: colors.primary,
  marginBottom: '20px',
  marginTop: 0,
});

const StyledSpan = glamorous.span({
  color: colors.black,
  fontSize: '14px',
  marginTop: '10px'
});

const LogInLink = glamorous(Link)({
  color: colors.primary,
  textDecoration: 'none',
});

const signUpInputs = [
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

const SignUp = () => (
  <SignUpForm>
    <SignUpHeading>Sign up</SignUpHeading>
    <div>
      {signUpInputs.map(input =>
        <FormInput key={input.type} inputType={input.inputType} labelText={input.labelText} />
      )}
    </div>
    <FormButton buttonText='Sign Up' />
    <StyledSpan>
      Already have an account?
      <LogInLink to='/'> Log in here!</LogInLink>
    </StyledSpan>
  </SignUpForm>
);

export default SignUp;
