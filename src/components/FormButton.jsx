import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import constants from './../constants';
const { colors } = constants;

const StyledButton = glamorous.button({
  border: 'none',
  backgroundColor: colors.primary,
  height: '50px',
  width: '400px',
  marginTop: '20px',
  fontSize: '18px',
  color: colors.white
});

const FormButton = ({title}) => (
  <StyledButton>{title}</StyledButton>
);

FormButton.propTypes = {
  title: PropTypes.string
};

export default FormButton;
