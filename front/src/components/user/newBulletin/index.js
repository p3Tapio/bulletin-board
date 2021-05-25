import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent } from '@react-md/dialog';
import { AppBar, AppBarNav } from '@react-md/app-bar';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import NewBulletin from './NewBulletin';
import useBulletin from '../../../hooks/useBulletin';

const BulletinDialog = ({ showDialog, setShowDialog }) => {
  const { createBulletin } = useBulletin();
  const handleSubmit = async (values) => {
    await createBulletin(values, setShowDialog);
  };
  return (
    <Dialog
      id="image-preview-dialog"
      type="full-page"
      visible={showDialog}
      onRequestClose={() => setShowDialog(false)}
      aria-labelledby="dialog-title"
    >
      <AppBar theme="secondary">
        <AppBarNav onClick={() => setShowDialog(false)} aria-label="Close">
          <AiOutlineArrowLeft size={30} />
        </AppBarNav>
        {/* <AppBarTitle id="bulletin-dialog">DIALOG</AppBarTitle> */}
      </AppBar>
      <DialogContent className="centerVertical">
        <NewBulletin onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
};

BulletinDialog.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  setShowDialog: PropTypes.func.isRequired,
};

export default BulletinDialog;
