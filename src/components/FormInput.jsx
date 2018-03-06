import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import constants from './../constants';
const { colors, variables } = constants;

const InputWrapper = glamorous.div({
  width: variables.inputWidth,
  position: 'relative',
  ':nth-child(1n+2)': {
    marginTop: variables.inputMarginTop,
  }
});

const InputLabel = glamorous.label({
  width: '100%',
  color: colors.darkGray,
  fontSize: variables.fontMedium,
  fontWeight: 'normal',
  position: 'absolute',
  top: '8px',
  transition: variables.inputLabelTransition,
  pointerEvents: 'none',
  '.inputActiveOrHasValue': {
    color: colors.primary,
    top: '-20',
    fontSize: variables.fontSmall
  }
});

const StyledInput = glamorous.input({
  color: colors.darkGray,
  backgroundColor: colors.white,
  boxSizing: 'border-box',
  width: '100%',
  border: 'none',
  fontSize: variables.fontMedium,
  padding: '8px 0 8px',
  display: 'block',
  ':focus': {
    outline: 'none'
  },
});

const StyledHR = glamorous.hr({
  borderLeft: 'none',
  borderRight: 'none',
  borderTop:  'none',
  width: '100%',
  boxSizing: 'content-box',
  position: 'absolute',
  margin: '0',
  bottom: '0',
  borderBottom: '1px solid #e0e0e0',
});

const AnimatedHR = glamorous(StyledHR)({
  borderBottom: `3px solid ${colors.primary}`,
  transition: variables.inputHRTransition,
  transform: 'scaleX(0)',
  '.inputFocused': {
    transform: 'scaleX(1)',
  }
});

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasValue: false,
      isFocused: false
    };
  }

  handleHasValue(e) {
    if(e.target.value) {
      this.setState({hasValue: true});
    } else {
      this.setState({hasValue: false});
    }
  }

  render() {
    const { inputType, labelText } = this.props;
    return (
      <InputWrapper>
        <StyledInput
          type={inputType}
          name={labelText}
          onFocus={() => this.setState({isFocused: true})}
          onBlur={() => this.setState({isFocused: false})}
          onChange={(event) => this.handleHasValue(event)} />
        <InputLabel
          className={(this.state.hasValue || this.state.isFocused) ? 'inputActiveOrHasValue' : ''}
          htmlFor={labelText}>
          {labelText}:
        </InputLabel>
        <div>
          <StyledHR />
          <AnimatedHR
            className={this.state.isFocused ? 'inputFocused' : ''}
          />
        </div>
      </InputWrapper>
    );
  }
}

FormInput.propTypes = {
  inputType: PropTypes.string,
  labelText: PropTypes.string
};

export default FormInput;
