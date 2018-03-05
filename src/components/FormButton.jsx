import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import colors from './../constants';

const StyledButton = glamorous.button({
  border: 'none',
  backgroundColor: colors.primary,
  height: '50px',
  width: '400px',
  marginTop: '20px',
  color: colors.black
});

const FormButton = ({title}) => (
  <StyledButton>{title}</StyledButton>
);

FormButton.propTypes = {
  title: PropTypes.string
};

export default FormButton;
