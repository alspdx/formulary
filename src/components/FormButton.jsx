import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import constants from './../constants';
const { colors, shadows } = constants;

const StyledButton = glamorous.button({
  border: 'none',
  backgroundColor: colors.primary,
  height: '50px',
  width: '400px',
  marginTop: '20px',
  fontSize: '18px',
  color: colors.white,
  boxShadow: shadows.box1,
  transition: shadows.transition,
  ':hover': {
    boxShadow: shadows.box3,
  }
});

const FormButton = ({title}) => (
  <StyledButton>{title}</StyledButton>
);

FormButton.propTypes = {
  title: PropTypes.string
};

export default FormButton;
