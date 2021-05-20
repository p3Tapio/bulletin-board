import React from 'react';
import PropTypes from 'prop-types';

const Bulletin = ({ bulletin }) => {
  return (
    <div>
      <strong> {bulletin.header}</strong>
      <p>{bulletin.description}</p>
      <br />
    </div>
  );
};

Bulletin.propTypes = {
  bulletin: PropTypes.shape({
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Bulletin;
