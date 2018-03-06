import React from 'react';
import glamorous from 'glamorous';
import FormInput from './FormInput';
import FormButton from './FormButton';
import constants from './../constants';
const { colors, shadows, variables } = constants;
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createUserAccount, signInToUserAccount } from './../actions';
import { connect } from 'react-redux';

const FormWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: variables.cardPadding,
  backgroundColor: colors.white,
  boxShadow: shadows.box1,
});

const StyledSpan = glamorous.span({
  color: colors.darkGray,
  fontSize: variables.fontSmall,
  marginTop: '10px'
});

const StyledLink = glamorous(Link)({
  color: colors.primary,
  textDecoration: 'none',
});

const formDetails = {
  register: {
    inputs: [
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
    ],
    buttonText: 'Join Formulary!',
    question: 'Already have an account? ',
    linkTo: '/signin',
    linkText: 'Sign In here!'
  },
  signIn: {
    inputs: [
      {
        inputType: 'email',
        labelText: 'Email'
      },
      {
        inputType: 'password',
        labelText: 'Password'
      }
    ],
    buttonText: 'Sign In!',
    question: 'Don\'t have an account? ',
    linkTo: '/register',
    linkText: 'Join Formulary!'
  }
};

class AccountForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission() {
    this.props.formType === 'register' ?
      this.props.dispatch(createUserAccount(this.state.userName, this.state.email, this.state.password)) :
      this.props.dispatch(signInToUserAccount(this.state.email, this.state.password));
  }

  handleChildInputChange(e, name) {
    this.state[name] = e.target.value;
  }

  render() {
    const { inputs, buttonText, question, linkTo, linkText } = formDetails[this.props.formType];

    return(
      <FormWrapper>
        <div>
          {inputs.map(input =>
            <FormInput
              key={input.labelText}
              inputType={input.inputType}
              labelText={input.labelText}
              name={input.labelText.toLowerCase()}
              onChildInputChange={(e, name) => this.handleChildInputChange(e, name)}
            />
          )}
        </div>
        <FormButton buttonText={buttonText} onButtonClick={this.handleFormSubmission} />
        <StyledSpan>
          {question}
          <StyledLink to={linkTo}>{linkText}</StyledLink>
        </StyledSpan>
      </FormWrapper>
    );
  }
}

AccountForm.propTypes = {
  formType: PropTypes.string,
  dispatch: PropTypes.func,
};

export default connect()(AccountForm);
