import glamorous from 'glamorous';
import { connect } from 'react-redux';
import NavItem from './NavItem';
import PropTypes from 'prop-types';
import React from 'react';
import { signOut } from './../actions/async';

const StyledNav = glamorous.ul({
  display: 'flex',
  listStyle: 'none',
});

const Nav = ({ dispatch, loggedIn, userDetails }) => {
  return (
    <div>
      {loggedIn ? (
        <StyledNav>
          <NavItem title={userDetails.userName} pathName={'/user'} />
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
  dispatch: PropTypes.func,
  loggedIn: PropTypes.bool,
  userDetails: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    userDetails: state.userDetails,
  };
};

export default connect(mapStateToProps)(Nav);
