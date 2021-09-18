/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';

const FormFileInput = ({ handleUpload, uploadResult }) => {
  const onDrop = useCallback(
    (file) => {
      handleUpload(file);
    },
    [handleUpload]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="dropzoneWrap">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop your image here!</p>
        ) : (
          <p>Add and image by dropping it here or click to select a file</p>
        )}
      </div>
      <ShowResult result={uploadResult} />
    </div>
  );
};
const ShowResult = ({ result }) => <p>{result}</p>;

FormFileInput.propTypes = {
  handleUpload: PropTypes.func.isRequired,
  uploadResult: PropTypes.string,
};
FormFileInput.defaultProps = { uploadResult: '' };
ShowResult.propTypes = { result: PropTypes.string };
ShowResult.defaultProps = { result: '' };

export default FormFileInput;
