const aws = require('aws-sdk');

module.exports = class FileService {
  constructor(app) {
    this.region = app.get('awsregion');
    this.bucket = app.get('bucket');
    this.accessKey = process.env.AWSAccessKeyId;
    this.secretKey = process.env.AWSSecretKey;
  }
  create(_id, params) {
    const s3 = new aws.S3();
    const filename = params.file.filename; //uuid?
    const filetype = params.file.filetype;

    const s3Params = {
      Bucket: this.bucket,
      Key: filename,
      Expires: 500,
      ContentType: filetype,
      ACL: 'public-read',
    };

    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if (err) {
        console.log(`AWS Error: ${err}`);
        return err;
      } else {
        return {
          signedRequest: data,
          url: `https://${this.bucket}.s3.amazonaws.com/${filename}`,
        };
      }
    });
  }
};
