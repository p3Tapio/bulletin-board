/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent } from '@react-md/dialog';
import { AppBar, AppBarNav } from '@react-md/app-bar';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import NewBulletin from './NewBulletin';
import useBulletin from '../../../hooks/useBulletin';
import useImage from '../../../hooks/useImage';

const BulletinDialog = ({ showDialog, setShowDialog }) => {
  const [image, setImage] = useState({ url: '', name: '', path: '' });
  const [uploadResult, setUploadResult] = useState({});
  const { createBulletin } = useBulletin();
  const { uploadImage, removeImage } = useImage();

  const handleSubmit = async (values) => {
    const data = { ...values, image };
    await createBulletin(data, setShowDialog);
  };
  const handleUpload = async (ev) => {
    const result = await uploadImage(ev);
    if (!result.error) {
      setImage({ url: result.url, name: result.name, path: result.path });
      setUploadResult(result);
    } else if (result.error) {
      setUploadResult(result);
    }
  };
  const handleRemove = async () => {
    const result = await removeImage(image);
    if (!result.error) {
      setImage({ url: '', name: '', path: '' });
      setUploadResult({});
    } else if (result.error) {
      setUploadResult(result);
    }
  };
  const handleCloseDialog = () => {
    setShowDialog(false);
    handleRemove(image);
  };
  return (
    <Dialog
      id="image-preview-dialog"
      type="full-page"
      visible={showDialog}
      onRequestClose={handleCloseDialog}
      aria-labelledby="dialog-title"
    >
      <AppBar theme="secondary">
        <AppBarNav onClick={handleCloseDialog} aria-label="Close">
          <AiOutlineArrowLeft size={30} />
        </AppBarNav>
      </AppBar>
      <DialogContent className="centerVertical">
        <NewBulletin
          onSubmit={handleSubmit}
          handleUpload={handleUpload}
          handleRemove={handleRemove}
          uploadResult={uploadResult}
        />
      </DialogContent>
    </Dialog>
  );
};

BulletinDialog.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  setShowDialog: PropTypes.func.isRequired,
};

export default BulletinDialog;
