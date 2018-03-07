import React from 'react';
import NavItem from './NavItem';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signOut } from './../actions';

const StyledNav = glamorous.ul({
  display: 'flex',
  listStyle: 'none',
});

const Nav = ({ loggedIn, userName, dispatch }) => {
  return (
    <div>
      {loggedIn ? (
        <StyledNav>
          <NavItem title={userName} pathName={'/user'} />
          <NavItem title='Sign Out' handleClick={() => dispatch(signOut())} />
        </StyledNav>
      ) : (
        <StyledNav>
          <NavItem title='Home' pathName={'/'} />
          <NavItem title='Sign In' pathName={'/signin'} />
          <NavItem title='Join Us!' pathName={'/register'} />
        </StyledNav>

      )}
    </div>
  );
};

Nav.propTypes = {
  loggedIn: PropTypes.bool,
  userName: PropTypes.string,
  dispatch: PropTypes.func
};

export default connect()(Nav);
