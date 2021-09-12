/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Text } from '@react-md/typography';
import { useSelector } from 'react-redux';
import Bulletin from './Bulletin';
import Loading from '../common/Loading';

const Bulletins = () => {
  const bulletinsState = useSelector((x) => x.bulletinsState);
  const { bulletins } = bulletinsState;
  const [active, setActive] = useState(-1);
  let indexPlus;

  const handleClick = (e, index) => {
    e.preventDefault();
    if (active === index) setActive(-1);
    else setActive(index);
  };
  const indexCount = (index) => {
    indexPlus = index + 1;
    return indexPlus;
  };
  if (!bulletinsState) return null;
  return (
    <>
      {bulletinsState.loading ? (
        <div className="centercenter" style={{ height: '80vh' }}>
          <Loading size="15vw" id="bulletins" />
        </div>
      ) : (
        <>
          <div className="centercenter">
            <div className="headerCard" id="headerCard">
              <Text type="headline-4">Bulletin board</Text>
              <Text type="body-1">
                This will be where you can see the bulletins and perhaps filter them with category
                etc.
              </Text>
            </div>
            <br />
          </div>
          <br />
          <form>
            {bulletins
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .map((b, i) => (
                <div key={b._id} className="accordionWrap">
                  <Bulletin
                    bulletin={b}
                    index={i}
                    handleClick={handleClick}
                    indexCount={indexCount}
                    active={active}
                  />
                </div>
              ))}
          </form>
        </>
      )}
    </>
  );
};

export default Bulletins;
