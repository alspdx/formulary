import React from 'react';
import glamorous from 'glamorous';
import whiteLogo from './../assets/images/formulary-logo-white.png';

const ImageWrapper = glamorous.div({

});

const HeaderLogo = () => (
  <ImageWrapper>
    <img src={whiteLogo} />
  </ImageWrapper>
);

export default HeaderLogo;
