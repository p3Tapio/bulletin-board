import React from 'react';
import { Text } from '@react-md/typography';

const Home = () => {
  return (
    <div className="centercenter">
      <div className="headerCard">
        <Text type="headline-4">Home page!</Text>
        <Text type="body-1">
          This will be a bulletin board app. Main purpose is to learn how to use FeathersJs and
          sockets.
        </Text>
      </div>
    </div>
  );
};

export default Home;
