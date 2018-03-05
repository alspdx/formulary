import React from 'react';
import glamorous from 'glamorous';
import colors from './../constants';
import PropTypes from 'prop-types';

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
  top: '10px',
  transition: '0.2s ease all',
  pointerEvents: 'none',
  '.labelSmall': {
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
  padding: '8px 0',
  display: 'block',
  ':focus': {
    outline: 'none'
  },
});

const AnimatedHR = glamorous.hr({
  borderLeft: 'none',
  borderRight: 'none',
  borderTop:  'none',
  borderBottom: `2px solid ${colors.primary}`,
  width: '100%',
  bottom: '8px',
  boxSizing: 'content-box',
  margin: '0px',
  position: 'absolute',
  transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  '.hrAnimate': {
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
    const { formType } = this.props;
    return (
      <InputWrapper>
        <StyledInput
          type={formType}
          name={formType}
          onFocus={() => this.setState({isFocused: true})}
          onBlur={() => this.setState({isFocused: false})}
          onChange={(event) => this.handleHasValue(event)} />
        <InputLabel
          className={(this.state.hasValue || this.state.isFocused) ? 'labelSmall' : ''}
          htmlFor={formType}>
          {formType[0].toUpperCase() + formType.slice(1)}:
        </InputLabel>
        <AnimatedHR
          className={this.state.isFocused ? '' : 'hrAnimate'}
        />
        <hr />
      </InputWrapper>
    );
  }
}

FormInput.propTypes = {
  formType: PropTypes.string
};

export default FormInput;
