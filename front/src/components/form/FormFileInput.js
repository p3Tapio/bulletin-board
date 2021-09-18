/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import { baseStyle, activeStyle, errorStyle } from './FileInputStyles';

const FormFileInput = ({ handleUpload, uploadResult }) => {
  const onDrop = useCallback(
    (file) => {
      handleUpload(file);
    },
    [handleUpload]
  );
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png, image/jpg',
  });
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragReject ? errorStyle : {}),
    }),
    [isDragActive, isDragReject]
  );
  return (
    <div className="dropzoneWrap">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          isDragReject ? (
            <p>Wrong file type</p>
          ) : (
            <p>Now drop your image here!</p>
          )
        ) : (
          <p>Add an image by dropping it here, or click to select a file</p>
        )}
      </div>
      <ShowResult result={uploadResult} />
    </div>
  );
};
const ShowResult = ({ result }) => {
  return <p>{result.error || result.name}</p>;
};

FormFileInput.propTypes = {
  handleUpload: PropTypes.func.isRequired,
  uploadResult: PropTypes.shape({
    name: PropTypes.string,
    error: PropTypes.string,
  }).isRequired,
};
ShowResult.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string,
    error: PropTypes.string,
  }).isRequired,
};

export default FormFileInput;
