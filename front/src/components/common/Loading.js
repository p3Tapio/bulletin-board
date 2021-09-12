import React from 'react';
import PropTypes from 'prop-types';
import './loading.css';

const Loading = ({ size, id }) => (
  <div className="loading" id={id} style={{ height: size, width: size }} />
);
Loading.propTypes = {
  size: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Loading;
