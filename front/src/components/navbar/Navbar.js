import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { AppBarAction } from '@react-md/app-bar';
import { Text } from '@react-md/typography';
import {
  AiOutlineHome,
  AiOutlineSmile,
  AiOutlineRight,
  AiOutlineComment,
  AiOutlineKey,
  AiOutlineLike,
} from 'react-icons/ai';
import { slide as Menu } from 'react-burger-menu';
import { useDispatch, useSelector } from 'react-redux';
import { burgerStyle, linkStyle, appBarActionStyle } from './menuStyles';
import { clearLoginState } from '../../state/actions/userActions';

import useElementWidth from '../../hooks/useElementWidth';

const Navbar = () => {
  const user = useSelector((x) => x.userState.userData);
  const dispatch = useDispatch();
  const history = useHistory();
  const { width } = useElementWidth('app-div');

  const handleLogout = () => {
    dispatch(clearLoginState());
    history.push('/');
  };
  return width && width > 550 ? (
    <BrowserMenu user={user} handleLogout={handleLogout} />
  ) : (
    <MobileMenu user={user} handleLogout={handleLogout} />
  );
};

const BrowserMenu = ({ handleLogout, user }) => (
  <>
    <div id="Navbar">
      <AppBarAction style={{ ...appBarActionStyle, width: 100 }}>
        <Link to="/" style={linkStyle}>
          <AiOutlineHome size={22} style={{ marginBottom: '5px', marginRight: '5px' }} />
          <Text type="button" component="p" style={{ marginRight: '5px' }}>
            Home
          </Text>
        </Link>
      </AppBarAction>
      <AppBarAction style={{ ...appBarActionStyle, width: 140 }}>
        <Link to="/bulletins" style={linkStyle}>
          <AiOutlineComment size={22} style={{ marginBottom: '5px', marginRight: '5px' }} />
          <Text type="button" component="p" style={{ marginRight: '5px' }}>
            bulletins
          </Text>
        </Link>
      </AppBarAction>
      {user && user.accessToken ? (
        <>
          <AppBarAction id="userpageWrap" style={{ ...appBarActionStyle }}>
            <Link to="/userpage" style={linkStyle}>
              <AiOutlineSmile size={22} style={{ marginBottom: '5px', marginRight: '5px' }} />
              <Text type="button" component="p">
                userpage
              </Text>
            </Link>
          </AppBarAction>
          {/* fall left if window.width < x */}
          <AppBarAction id="logoutBtnWrap" style={{ ...appBarActionStyle, width: 110 }}>
            <span onClick={() => handleLogout()} style={linkStyle} aria-hidden="true">
              <AiOutlineRight size={22} style={{ marginBottom: '5px', marginRight: '5px' }} />
              <Text id="logoutBtn" type="button" component="p" style={{ marginRight: '5px' }}>
                logout
              </Text>
            </span>
          </AppBarAction>
        </>
      ) : (
        <>
          <AppBarAction style={{ ...appBarActionStyle, width: 110 }}>
            <Link to={{ pathname: '/auth', search: '?register=false' }} style={linkStyle}>
              <AiOutlineKey size={22} style={{ marginBottom: '5px', marginRight: '5px' }} />
              <Text id="loginBtn" type="button" component="p" style={{ marginRight: '5px' }}>
                login
              </Text>
            </Link>
          </AppBarAction>
          <AppBarAction style={{ ...appBarActionStyle, width: 130 }}>
            <Link to={{ pathname: '/auth', search: '?register=true' }} style={linkStyle}>
              <AiOutlineLike size={22} style={{ marginBottom: '5px', marginRight: '5px' }} />
              <Text type="button" component="p" style={{ marginRight: '5px' }}>
                register
              </Text>
            </Link>
          </AppBarAction>
        </>
      )}
    </div>
  </>
);

const MobileMenu = ({ handleLogout, user }) => {
  return (
    <Menu right pageWrapId="page-wrap" outerContainerId="app-div" styles={burgerStyle} width={220}>
      <a id="home" className="menu-item" href="/" style={linkStyle}>
        <AiOutlineHome size={22} style={{ marginBottom: '5px', marginRight: '5px' }} />
        <Text type="button" component="p" style={{ marginRight: '5px' }}>
          Home
        </Text>
      </a>
      <a href="/bulletins" style={{ ...linkStyle, marginTop: '-20px' }}>
        <AiOutlineComment size={22} style={{ marginBottom: '5px', marginRight: '5px' }} />
        <Text type="button" component="p">
          bulletins
        </Text>
      </a>
      {user && user.accessToken ? (
        <>
          <a href="/userpage" style={{ ...linkStyle, marginTop: '-20px' }}>
            <AiOutlineSmile size={22} style={{ marginBottom: '5px', marginRight: '5px' }} />
            <Text type="button" component="p">
              userpage
            </Text>
          </a>
          <a href="/" onClick={() => handleLogout()} style={{ ...linkStyle, marginTop: '-20px' }}>
            <AiOutlineRight size={22} style={{ marginBottom: '5px', marginRight: '5px' }} />
            <Text id="logoutBtn" type="button" component="p">
              logout
            </Text>
          </a>
        </>
      ) : (
        <>
          <a href="/auth?register=false" style={{ ...linkStyle, marginTop: '-20px' }}>
            <AiOutlineKey size={22} style={{ marginBottom: '5px', marginRight: '5px' }} />
            <Text id="loginBtn" type="button" component="p">
              login
            </Text>
          </a>
          <a href="/auth?register=true" style={{ ...linkStyle, marginTop: '-20px' }}>
            <AiOutlineLike size={22} style={{ marginBottom: '5px', marginRight: '5px' }} />
            <Text type="button" component="p">
              register
            </Text>
          </a>
        </>
      )}
    </Menu>
  );
};
const menuProps = {
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    accessToken: PropTypes.string,
    user: PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      bulletins: PropTypes.array,
      username: PropTypes.string,
      _id: PropTypes.string,
    }),
  }),
};
const menuDefaults = {
  user: {
    bulletins: [],
    username: '',
    _id: '',
  },
};

BrowserMenu.propTypes = menuProps;
BrowserMenu.defaultProps = menuDefaults;
MobileMenu.propTypes = menuProps;
MobileMenu.defaultProps = menuDefaults;

export default Navbar;
