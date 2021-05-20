/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Text } from '@react-md/typography';
import { useSelector } from 'react-redux';
import Bulletin from './Bulletin';

const Bulletins = () => {
  const bulletins = useSelector((x) => x.bulletinsState.bulletins);
  return (
    <>
      <div className="centercenter">
        <div className="headerCard">
          <Text type="headline-4">Bulletin board</Text>
          <Text type="body-1">This will be where you can see the bulletins.</Text>
        </div>
        <br />
      </div>
      <br />
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '50px' }}>
        {bulletins.map((b) => (
          <div key={b._id}>
            <Bulletin bulletin={b} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Bulletins;
