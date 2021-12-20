/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import { Button } from '@react-md/button';
import {
  baseStyle,
  activeStyle,
  errorStyle,
  thumbsContainer,
  thumb,
  thumbInner,
  img,
  uploaded,
} from './FileInputStyles';

const FormFileInput = ({ handleUpload, handleRemove, uploadResult }) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    accept: 'image/jpeg, image/png, image/jpg, image/JPEG, image/PNG, image/JPG',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      handleUpload(acceptedFiles);
    },
  });
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragReject ? errorStyle : {}),
    }),
    [isDragActive, isDragReject]
  );
  const removeFile = (file) => {
    handleRemove(file);
    setFiles([]);
  };

  if (files.length === 0)
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
                <div style={{ width: '410px' }}>
                  <p>Now drop it!</p>
                </div>
              )
            ) : (
              <div>
                Add an image by dropping it here, or click to select a file.
                <br />
                <small style={{ fontStyle: 'italic' }}>(*.png, *.jpeg and *.jpg supported)</small>
              </div>
            )}
          </div>
        </div>
      </>
    );

  return (
    <div style={uploaded}>
      <Preview files={files} />
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          marginTop: '20px',
        }}
      >
        <ShowResult result={uploadResult} />
        <Button style={{ alignSelf: 'flex-end' }} onClick={() => removeFile(files[0])}>
          Delete
        </Button>
      </div>
    </div>
  );
};

const Preview = ({ files }) => {
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="img" />
      </div>
    </div>
  ));
  return (
    <section className="container">
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
};

const ShowResult = ({ result }) => {
  let resultStyle;
  // TODO:
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
        (result.name && <small className={resultStyle}>{result.error || result.name}</small>)}
    </>
  );
};
Preview.propTypes = {
  files: PropTypes.instanceOf(Array),
};
Preview.defaultProps = {
  files: [],
};
FormFileInput.propTypes = {
  handleUpload: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  uploadResult: PropTypes.shape({
    name: PropTypes.string,
    error: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
};
ShowResult.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string,
    error: PropTypes.string,
  }).isRequired,
};

export default FormFileInput;
