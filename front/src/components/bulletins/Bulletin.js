import React from 'react';
import PropTypes from 'prop-types';

const Bulletin = ({ bulletin, index, indexCount, handleClick, active }) => {
  return (
    <>
      <h3>
        <button
          type="button"
          onClick={(e) => handleClick(e, index)}
          className={active === index ? 'accordionBtn active' : 'accordionBtn inactive'}
          aria-expanded={active === index ? 'true' : 'false'}
          aria-controls={`sect-${indexCount(index)}`}
          aria-disabled={active === index ? 'true' : 'false'}
          tabIndex={indexCount(index)}
        >
          <span className="accordion-title-wrapper">
            {bulletin.header}
            {/* <span className={active === index ? 'plus' : 'minus'} /> */}
          </span>
        </button>
      </h3>
      <div
        id={`sect-${indexCount(index)}`}
        className={active === index ? 'panel-open' : 'panel-close'}
      >
        {bulletin.description}
      </div>
    </>
  );
};

Bulletin.propTypes = {
  bulletin: PropTypes.shape({
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  indexCount: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
};

export default Bulletin;
