import React from 'react';
import glamorous from 'glamorous';
import whiteLogo from './../assets/images/formulary-logo-white.png';

const ImageWrapper = glamorous.div({
  height: '100%',
  top: '20px',
  position: 'relative'
});

const Logo = glamorous.img({
  height: '200px',
});

const HeaderLogo = () => (
  <ImageWrapper>
    <Logo src={whiteLogo} />
  </ImageWrapper>
);

export default HeaderLogo;
