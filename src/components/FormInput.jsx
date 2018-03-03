import React from 'react';
import glamorous from 'glamorous';
import colors from './../constants';
import PropTypes from 'prop-types';

const StyledInput = glamorous.input({
  backgroundColor: colors,
  height: '50px',
  borderRadius: '10px',
  border: 'none',
  ':nth-child(1n+2)': {
    marginTop: '20px',
  }
});

const FormInput = ({ formType }) => (
  <StyledInput type={formType} />
);

FormInput.propTypes = {
  formType: PropTypes.string
};

export default FormInput;
