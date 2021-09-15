import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent } from '@react-md/dialog';
import { AppBar, AppBarNav } from '@react-md/app-bar';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import NewBulletin from './NewBulletin';
import useBulletin from '../../../hooks/useBulletin';

const BulletinDialog = ({ showDialog, setShowDialog }) => {
  const [file, setFile] = useState('');
  const { createBulletin } = useBulletin();
  const handleSubmit = async (values) => {
    await createBulletin(values, setShowDialog);
  };
  const handleUpload = useCallback((ev) => {
    const [upload] = Array.from(ev.currentTarget.files || [null]);
    if (upload && upload.name) {
      const parts = upload.name.split('.');
      const type = parts[parts.length - 1];
      if (type !== 'jpg' && type !== 'jpeg' && type !== 'png') {
        alert('wrong type! upload an image'); // TODO add to validation tms.
      } else {
        setFile(upload);
      }
    }
  }, []);
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
        <NewBulletin onSubmit={handleSubmit} handleUpload={handleUpload} />
      </DialogContent>
    </Dialog>
  );
};

BulletinDialog.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  setShowDialog: PropTypes.func.isRequired,
};

export default BulletinDialog;
