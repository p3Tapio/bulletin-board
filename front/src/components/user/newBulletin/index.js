import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Dialog, DialogContent } from '@react-md/dialog';
import { AppBar, AppBarNav } from '@react-md/app-bar';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import NewBulletin from './NewBulletin';
import useBulletin from '../../../hooks/useBulletin';
import { fileService } from '../../../client';

const BulletinDialog = ({ showDialog, setShowDialog }) => {
  const [image, setImage] = useState({ url: '', name: '' });
  const { createBulletin } = useBulletin();
  const handleSubmit = async (values) => {
    const data = { ...values, image };
    await createBulletin(data, setShowDialog);
  };
  const handleUpload = async (ev) => {
    try {
      const [upload] = Array.from(ev.currentTarget.files || [null]);
      if (upload && upload.name) {
        const parts = upload.name.split('.');
        const type = parts[parts.length - 1];
        if (type !== 'jpg' && type !== 'jpeg' && type !== 'png') {
          // TODO add validation messages, for max size too + if uploaded, show file name and prevent further uploads? X next to it to delete?
        } else {
          const uploadDetails = await fileService.create({ name: upload.name, type });
          const options = {
            headers: { 'Content-Type': `image/${type}`, 'x-amz-acl': 'public-read' },
          };
          await axios.put(uploadDetails.signedUrl, upload, options);
          setImage({ url: uploadDetails.url, name: upload.name });
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('err', err);
    }
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
