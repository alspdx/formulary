import React from 'react';
import glamorous from 'glamorous';
import whiteLogo from './../assets/images/formulary-logo-white.png';
import constants from './../constants';
const { variables } = constants;

const ImageWrapper = glamorous.div({
  height: '100%',
  top: variables.logoTopPosition,
  position: 'relative'
});

const Logo = glamorous.img({
  height: variables.logoHeight,
});

const HeaderLogo = () => (
  <ImageWrapper>
    <Logo src={whiteLogo} />
  </ImageWrapper>
);

export default HeaderLogo;
