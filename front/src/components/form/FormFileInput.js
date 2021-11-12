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
    <>
      <div>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          {isDragActive ? (
            isDragReject ? (
              <div>
                <p style={{ marginLeft: '60px', marginBottom: '0px', marginTop: '-5px' }}>
                  Wrong file type
                </p>
                <small style={{ fontStyle: 'italic' }}>
                  (Only *.jpeg, *.jpg and *.png are accepted)
                </small>
              </div>
            ) : (
              <p>Now drop it!</p>
            )
          ) : (
            <p>Add an image by dropping it here, or click to select a file</p>
          )}
        </div>
      </div>
      <div>
        <ShowResult result={uploadResult} />
      </div>
    </>
  );
};
const ShowResult = ({ result }) => {
  let resultStyle;
  if (result.error) {
    resultStyle = 'img-upload-error';
    // eslint-disable-next-line no-console
    console.log('result.error', result.error);
  } else if (result.name) {
    resultStyle = 'img-upload-success';
    // eslint-disable-next-line no-console
    console.log('result.name', result.name);
  }
  return (
    <>
      {result.error ||
        (result.name && (
          <p className={resultStyle}>{result.error || `uploaded: ${result.name}`}</p>
        ))}
    </>
  );
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
