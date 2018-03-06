import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import constants from './../constants';
const { colors } = constants;

const InputWrapper = glamorous.div({
  width: '400px',
  position: 'relative',
  ':nth-child(1n+2)': {
    marginTop: '50px',
  }
});

const InputLabel = glamorous.label({
  width: '100%',
  color: colors.darkGray,
  fontSize: '18px',
  fontWeight: 'normal',
  position: 'absolute',
  top: '8px',
  transition: '0.2s ease all',
  pointerEvents: 'none',
  '.inputActiveOrHasValue': {
    color: colors.primary,
    top: '-20',
    fontSize: '14px'
  }
});

const StyledInput = glamorous.input({
  color: colors.darkGray,
  backgroundColor: colors.white,
  boxSizing: 'border-box',
  width: '100%',
  border: 'none',
  fontSize: '18px',
  padding: '8px 0 10px',
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
  transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  '.inputFocused': {
    transform: 'scaleX(0)',
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
            className={this.state.isFocused ? '' : 'inputFocused'}
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
