import React from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { clearLoginState } from '../../state/actions/userActions';

const linkStyle = {
  textDecoration: 'none',
  color: 'grey',
  display: 'flex',
  alignItems: 'center',
};
const appBarActionStyle = {
  borderRadius: '5px',
  height: '30px',
  marginLeft: '5px',
  marginRight: '5px',
  padding: '10px',
};

const Navbar = () => {
  const user = useSelector((x) => x.userState.userData);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(clearLoginState());
    // TODO location.reload() ---> jos yhteys ei säily logoutin jälkeen. Socketti lopettaa välillä siis toiminnan.
    // eslint-disable-next-line no-undef
    // window.location.reload();
    history.push('/');
  };

  return (
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
            <AppBarAction style={{ ...appBarActionStyle, width: 130 }}>
              <Link to="/userpage" style={linkStyle}>
                <AiOutlineSmile size={22} style={{ marginBottom: '5px', marginRight: '5px' }} />
                <Text type="button" component="p" style={{ marginRight: '5px' }}>
                  userpage
                </Text>
              </Link>
            </AppBarAction>
            <AppBarAction style={{ ...appBarActionStyle, marginLeft: 'auto', width: 110 }}>
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
              <Link to={{ pathname: '/auth', state: { showRegister: false } }} style={linkStyle}>
                <AiOutlineKey size={22} style={{ marginBottom: '5px', marginRight: '5px' }} />
                <Text id="loginBtn" type="button" component="p" style={{ marginRight: '5px' }}>
                  login
                </Text>
              </Link>
            </AppBarAction>
            <AppBarAction style={{ ...appBarActionStyle, width: 130 }}>
              <Link to={{ pathname: '/auth', state: { showRegister: true } }} style={linkStyle}>
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
};
export default Navbar;
