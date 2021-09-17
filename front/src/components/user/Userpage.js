import React, { useState } from 'react';
import { Text } from '@react-md/typography';
import { Button } from '@react-md/button';
import { useSelector } from 'react-redux';
import BulletinDialog from './newBulletin';

const Userpage = () => {
  const user = useSelector((x) => x.userState.userData.user);
  const [showDialog, setShowDialog] = useState(false);
  // if(!user..) return null;
  return (
    <div className="centercenter">
      <div className="headerCard">
        <Text type="headline-4">Hi, {user.username}!</Text>
        <Text type="body-1">
          This will be a user page, where users can see their bulletins and create new, edit or
          delete old ones.
        </Text>
        <br />
        <Button type="button" themeType="contained" onClick={() => setShowDialog(true)}>
          Create new
        </Button>
      </div>
      <BulletinDialog showDialog={showDialog} setShowDialog={setShowDialog} />
    </div>
  );
};

export default Userpage;
