import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import colors from './../constants';

const StyledButton = glamorous.button({
  border: 'none',
  backgroundColor: colors.primary,
  height: '50px',
  borderRadius: '10px',
  width: '400px',
  marginTop: '20px'
});

const FormButton = ({title}) => (
  <StyledButton>{title}</StyledButton>
);

FormButton.propTypes = {
  title: PropTypes.string
};

export default FormButton;
