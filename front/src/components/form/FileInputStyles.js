export const baseStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100px',
  color: '#486466',
  padding: '10px',
  marginTop: '10px',
  boxShadow: '-2px 2px 7px -1px #9bb2b4',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  transition: 'box-shadow .05s ease-in',
};
export const activeStyle = {
  background: '#fbfbfb',
  boxShadow: '-6px 5px 12px -3px #9bb2b4',
};
export const errorStyle = {
  color: '#FF0000',
  border: '1px solid #FF0000',
  boxShadow: '-1px 1px 2px 0px #FF0000',
};
export const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

export const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
};

export const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

export const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};
