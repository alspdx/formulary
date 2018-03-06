import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import constants from './../constants';
const { colors, shadows, variables } = constants;
import { Link } from 'react-router-dom';

const StyledButton = glamorous.button({
  border: 'none',
  backgroundColor: colors.primary,
  height: '50px',
  width: variables.inputWidth,
  marginTop: variables.inputMarginTop,
  fontSize: variables.fontLarge,
  color: colors.white,
  boxShadow: shadows.box1,
  transition: shadows.transition,
  ':hover': {
    boxShadow: shadows.box3,
  },
  ':focus': {
    outline: 'none'
  },
  ':active': {
    backgroundColor: colors.primaryLighter
  },
});

const FormButton = ({ buttonText, buttonPath }) => (
  <Link to={buttonPath}><StyledButton>{buttonText}</StyledButton></Link>
);

FormButton.propTypes = {
  buttonText: PropTypes.string,
  buttonPath: PropTypes.string
};

export default FormButton;
