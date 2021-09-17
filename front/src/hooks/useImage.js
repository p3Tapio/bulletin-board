import axios from 'axios';
import { fileService } from '../client';

const useImage = () => {
  // dispatch loading?
  const uploadImage = async (ev) => {
    const [upload] = Array.from(ev.currentTarget.files || [null]);
    try {
      if (upload && upload.name) {
        const parts = upload.name.split('.');
        const type = parts[parts.length - 1];
        if (type !== 'jpeg' && type !== 'jpg' && type !== 'png') {
          return { error: 'Wrong file format' };
        }
        const uploadDetails = await fileService.create({ name: upload.name, type });
        const options = {
          headers: { 'Content-Type': `image/${type}`, 'x-amz-acl': 'public-read' },
        };
        await axios.put(uploadDetails.signedUrl, upload, options);
        return { url: uploadDetails.url, name: upload.name };
      }
      return { error: 'Upload error' };
    } catch (err) {
      return { error: err };
    }
  };
  return { uploadImage };
};

export default useImage;
