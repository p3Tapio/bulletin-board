import axios from 'axios';
import { fileService } from '../client';

const useImage = () => {
  // dispatch loading?
  const uploadImage = async (upload) => {
    try {
      const [file] = upload;
      if (file && file.name) {
        const parts = file.name.split('.');
        const type = parts[parts.length - 1];
        if (
          type.toLowerCase() !== 'jpeg' &&
          type.toLowerCase() !== 'jpg' &&
          type.toLowerCase() !== 'png'
        ) {
          return { error: 'Wrong file format' };
        }
        const uploadDetails = await fileService.create({ name: upload.name, type });
        const options = {
          headers: { 'Content-Type': `image/${type}`, 'x-amz-acl': 'public-read' },
        };
        await axios.put(uploadDetails.signedUrl, file, options);
        return { url: uploadDetails.url, name: file.name, path: uploadDetails.filePath };
      }
      return { error: 'Upload error' };
    } catch (err) {
      return { error: err };
    }
  };
  const removeImage = async (image) => {
    try {
      if (image && image.path) {
        const result = await fileService.remove({ path: image.path });
        return result;
      }
      return { error: `Invalid params: ${image}` };
    } catch (err) {
      return { error: err };
    }
  };
  return { uploadImage, removeImage };
};

export default useImage;
