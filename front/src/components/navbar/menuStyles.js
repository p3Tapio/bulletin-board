// https://github.com/negomi/react-burger-menu#styling
const burgerStyle = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '30px',
    right: '30px',
    top: '40px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: 'white',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmCrossButton: {
    width: '24px',
    height: '24px',
  },
  bmItemList: {
    display: 'flex',
    flexDirection: 'column',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

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

export { burgerStyle, linkStyle, appBarActionStyle };
