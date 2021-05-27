import React from 'react';
import PropTypes from 'prop-types';
import { VscChevronDown, VscClose } from 'react-icons/vsc';
import useElementWidth from '../../hooks/useElementWidth';

const Bulletin = ({ bulletin, index, indexCount, handleClick, active }) => {
  const { width } = useElementWidth('headerCard');
  const elementWidth = { width };

  return (
    <>
      <h3>
        <button
          type="button"
          onClick={(e) => handleClick(e, index)}
          className={active === index ? 'accordionBtn active' : 'accordionBtn inactive'}
          style={elementWidth}
          aria-expanded={active === index ? 'true' : 'false'}
          aria-controls={`sect-${indexCount(index)}`}
          aria-disabled={active === index ? 'true' : 'false'}
          tabIndex={indexCount(index)}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'space-between' }}>
            <span className="accordion-title-wrapper">{bulletin.header}</span>
            {active === index ? (
              <VscClose
                size={22}
                // className={active === index ? 'iconTransitionIn' : { opacity: '0%' }}
              />
            ) : (
              <VscChevronDown
                size={22}
                // className={active !== index ? 'iconTransitionIn' : { opacity: '10%' }}
              />
            )}
          </div>
        </button>
      </h3>
      <div
        id={`sect-${indexCount(index)}`}
        style={elementWidth}
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
