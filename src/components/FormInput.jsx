import React from 'react';
import glamorous from 'glamorous';
import colors from './../constants';
import PropTypes from 'prop-types';

const StyledInput = glamorous.input({
  backgroundColor: colors.white,
  height: '20px'
});

const FormInput = ({ formType }) => (
  <StyledInput type={formType}>
  </StyledInput>
);

FormInput.propTypes = {
  formType: PropTypes.string
};


export default FormInput;
