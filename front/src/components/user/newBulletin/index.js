import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Dialog, DialogContent } from '@react-md/dialog';
import { AppBar, AppBarNav } from '@react-md/app-bar';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import NewBulletin from './NewBulletin';
import useBulletin from '../../../hooks/useBulletin';
import { fileService } from '../../../client';

const BulletinDialog = ({ showDialog, setShowDialog }) => {
  const { createBulletin } = useBulletin();
  const handleSubmit = async (values) => {
    await createBulletin(values, setShowDialog);
  };
  //  https://medium.com/developing-koan/uploading-images-to-s3-from-a-react-single-page-application-45a4d24af09f
  const handleUpload = async (ev) => {
    try {
      const [upload] = Array.from(ev.currentTarget.files || [null]);
      if (upload && upload.name) {
        const parts = upload.name.split('.');
        const type = parts[parts.length - 1];
        if (type !== 'jpg' && type !== 'jpeg' && type !== 'png') {
          // TODO add to validation tms. + fix name so u delete the last cell plus .
        } else {
          const uploadDetails = await fileService.create({ name: upload.name, type });
          const options = {
            headers: { 'Content-Type': `image/${type}` },
          };
          const response = await axios.put(uploadDetails.signedUrl, upload, options);
          console.log('response', response);
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
