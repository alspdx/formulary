import React from 'react';
import glamorous from 'glamorous';
import FormInput from './FormInput';
import FormButton from './FormButton';
import constants from './../constants';
const { colors, shadows } = constants;
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FormWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '60px 100px',
  backgroundColor: colors.white,
  boxShadow: shadows.box1,
});

const StyledSpan = glamorous.span({
  color: colors.darkGray,
  fontSize: '14px',
  marginTop: '10px'
});

const StyledLink = glamorous(Link)({
  color: colors.primary,
  textDecoration: 'none',
});

const AccountForm = ({ formDetails }) => {
  const { inputs, buttonText, question, linkTo, linkText } = formDetails;
  return(
    <FormWrapper>
      <div>
        {inputs.map(input =>
          <FormInput key={input.labelText} inputType={input.inputType} labelText={input.labelText} />
        )}
      </div>
      <FormButton buttonText={buttonText} />
      <StyledSpan>
        {question}
        <StyledLink to={linkTo}>{linkText}</StyledLink>
      </StyledSpan>
    </FormWrapper>
  );
};

AccountForm.propTypes = {
  formDetails: PropTypes.object
};

export default AccountForm;
